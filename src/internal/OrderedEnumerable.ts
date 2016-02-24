import IComparer from './IComparer'
import OrderedPartition from './OrderedPartition'
import Partition from './Partition'
import partialQuickSort from './partialQuickSort'
import quickSelect from './quickSelect'
import { noElements } from './errors'

export default class OrderedEnumerable<TElement, TKey> extends Partition<TElement> {
    constructor(private _source: Iterable<TElement>,
                private _keySelector: (value: TElement) => TKey,
                private _descending: boolean,
                private _parent?: OrderedEnumerable<TElement, any>) {
        super()
    }

    [Symbol.iterator](): Iterator<TElement> {
        return this.toArray()[Symbol.iterator]()
    }

    thenBy<TKey>(keySelector?: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, false, this)
    }

    thenByDescending<TKey>(keySelector?: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, true, this)
    }

    take(count: number): Partition<TElement> {
        return new OrderedPartition(this, 0, count - 1)
    }

    skip(count: number): Partition<TElement> {
        return new OrderedPartition(this, count, Number.MAX_VALUE)
    }

    first(): TElement {
        const iterator = this._source[Symbol.iterator]()

        let result = iterator.next()

        if (!result.done) {
            const comparer = this._getComparer()

            let value = result.value

            result = iterator.next()

            while (!result.done) {
                if (comparer(result.value, value) < 0) {
                    value = result.value
                }

                result = iterator.next()
            }

            return value
        }

        throw noElements()
    }

    firstOrDefault(defaultValue?: TElement): TElement {
        const iterator = this._source[Symbol.iterator]()

        let result = iterator.next()

        if (!result.done) {
            const comparer = this._getComparer()

            let value = result.value

            result = iterator.next()

            while (!result.done) {
                if (comparer(result.value, value) < 0) {
                    value = result.value
                }

                result = iterator.next()
            }

            return value
        }

        return defaultValue
    }

    last(): TElement {
        const iterator = this._source[Symbol.iterator]()

        let result = iterator.next()

        if (!result.done) {
            const comparer = this._getComparer()

            let value = result.value

            result = iterator.next()

            while (!result.done) {
                if (comparer(result.value, value) > 0) {
                    value = result.value
                }

                result = iterator.next()
            }

            return value
        }

        throw noElements()
    }

    lastOrDefault(defaultValue?: TElement): TElement {
        const iterator = this._source[Symbol.iterator]()

        let result = iterator.next()

        if (!result.done) {
            const comparer = this._getComparer()

            let value = result.value

            result = iterator.next()

            while (!result.done) {
                if (comparer(result.value, value) > 0) {
                    value = result.value
                }

                result = iterator.next()
            }

            return value
        }

        return defaultValue
    }

    lastPartition(minIndex: number, maxIndex: number): TElement {
        const array = Array.from(this._source)
        const count = array.length
        const comparer = this._getComparer()

        if (minIndex >= count) throw noElements()
        if (maxIndex < count - 1) return quickSelect(array, comparer, 0, count - 1, maxIndex)

        let i = 1
        let current = array[0]

        while (i < count) {
            let next = array[i]
            if (comparer(next, current) > 0) {
                current = next
            }
            i++
        }

        return current
    }

    lastPartitionOrDefault(minIndex: number, maxIndex: number, defaultValue?: TElement): TElement {
        const array = Array.from(this._source)
        const count = array.length
        const comparer = this._getComparer()

        if (minIndex >= count) return defaultValue
        if (maxIndex < count - 1) return quickSelect(array, comparer, 0, count - 1, maxIndex)

        let i = 1
        let current = array[0]

        while (i < count) {
            let next = array[i]
            if (comparer(next, current) > 0) {
                current = next
            }
            i++
        }

        return current
    }

    elementAt(index: number): TElement {
        if (index === 0) return this.first()
        const array = Array.from(this._source)
        const count = array.length
        if (index > count - 1) throw noElements()
        const comparer = this._getComparer()
        return quickSelect(array, comparer, 0, count - 1, index)
    }

    elementAtOrDefault(index: number, defaultValue?: TElement): TElement {
        if (index === 0) return this.firstOrDefault(defaultValue)
        const array = Array.from(this._source)
        const count = array.length
        if (index > count - 1) return defaultValue
        const comparer = this._getComparer()
        return quickSelect(array, comparer, 0, count - 1, index)
    }

    toArray(): TElement[] {
        const comparer = this._getComparer()
        const array = Array.from(this._source)
        return array.sort(comparer)
    }

    toArrayPartition(minIndex: number, maxIndex: number): TElement[] {
        const array = Array.from(this._source)
        const count = array.length

        if (count > minIndex) {
            const comparer = this._getComparer()

            maxIndex = count > maxIndex ? maxIndex : count - 1

            if (minIndex === maxIndex) {
                return [quickSelect(array, comparer, 0, count - 1, minIndex)]
            } else {
                partialQuickSort(array, comparer, 0, count - 1, minIndex, maxIndex)
                return array.slice(minIndex, maxIndex + 1)
            }
        }
        return []
    }

    private _getComparer(next?: IComparer<TElement>): IComparer<TElement> {
        if (!next) next = () => 0
        const comparer = (first: TElement, second: TElement): number => {
            const firstKey = this._keySelector(first)
            const secondKey = this._keySelector(second)
            if (firstKey < secondKey) return this._descending ? 1 : -1
            if (firstKey > secondKey) return this._descending ? -1 : 1
            return next(first, second)
        }
        return this._parent ? this._parent._getComparer(comparer) : comparer
    }
}

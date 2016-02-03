import EmptyPartition from './EmptyPartition'
import OrderedEnumerable from './OrderedEnumerable'
import Partition from './Partition'

export default class OrderedPartition<TElement> extends Partition<TElement> {
    constructor(private _source: OrderedEnumerable<TElement, any>,
                private _minIndex: number,
                private _maxIndex: number) {
        super()
    }

    [Symbol.iterator](): Iterator<TElement> {
        return this._source.toArrayPartition(this._minIndex, this._maxIndex).values()
    }

    skip(count: number): Partition<TElement> {
        const minIndex = this._minIndex + count
        return minIndex > this._maxIndex
            ? new EmptyPartition<TElement>()
            : new OrderedPartition(this._source, minIndex, this._maxIndex)
    }

    take(count: number): Partition<TElement> {
        let maxIndex = this._minIndex + count - 1
        if (maxIndex >= this._maxIndex) maxIndex = this._maxIndex
        return new OrderedPartition(this._source, this._minIndex, maxIndex)
    }

    first(): TElement {
        return this._source.elementAt(this._minIndex)
    }

    firstOrDefault(): TElement {
        return this._source.elementAtOrDefault(this._minIndex)
    }

    last(): TElement {
        return this._source.lastPartition(this._minIndex, this._maxIndex)
    }

    lastOrDefault(): TElement {
        return this._source.lastPartitionOrDefault(this._minIndex, this._maxIndex)
    }

    elementAt(index: number): TElement {
        if (index > this._maxIndex - this._minIndex) {
            throw new Error('Sequence index is out of range.')
        }
        return this._source.elementAt(index + this._minIndex)
    }

    elementAtOrDefault(index: number): TElement {
        if (index > this._maxIndex - this._minIndex) {
            return null
        }
        return this._source.elementAtOrDefault(index + this._minIndex)
    }
}

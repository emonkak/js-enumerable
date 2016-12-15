import OrderedPartition from './OrderedPartition';
import partialQuickSort from './partialQuickSort';
import quickSelect from './quickSelect';
import { Enumerable } from './Enumerable';
import { noElements } from './errors';

export default class OrderedEnumerable<TElement, TKey> extends Enumerable<TElement> {
    constructor(_source: Iterable<TElement>,
                private _keySelector: (value: TElement) => TKey,
                private _descending: boolean,
                private _parent?: OrderedEnumerable<TElement, any>) {
        super(_source);
    }

    get source(): Iterable<TElement> {
        return this;
    }

    *[Symbol.iterator](): Iterator<TElement> {
        for (const element of this.toArray()) {
            yield element;
        }
    }

    thenBy<TKey>(keySelector?: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, false, this);
    }

    thenByDescending<TKey>(keySelector?: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, true, this);
    }

    take(count: number): Enumerable<TElement> {
        return new Enumerable(new OrderedPartition(this, 0, count - 1));
    }

    skip(count: number): Enumerable<TElement> {
        return new Enumerable(new OrderedPartition(this, count, Number.MAX_VALUE));
    }

    first(predicate?: (element: TElement) => boolean): TElement {
        const iterator = this._source[Symbol.iterator]();

        if (predicate) {
            let result: IteratorResult<TElement>;

            do {
                result = iterator.next();
                if (result.done) {
                    throw noElements();
                }
            } while (!predicate(result.value));

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (predicate(result.value) && comparer(result.value, value) < 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        } else {
            let result = iterator.next();

            if (result.done) {
                throw noElements();
            }

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (comparer(result.value, value) < 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        }
    }

    firstOrDefault(predicate?: (element: TElement) => boolean, defaultValue: TElement = null): TElement {
        const iterator = this._source[Symbol.iterator]();

        if (predicate) {
            let result: IteratorResult<TElement>;

            do {
                result = iterator.next();
                if (result.done) {
                    return defaultValue;
                }
            } while (!predicate(result.value));

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (predicate(result.value) && comparer(result.value, value) < 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        } else {
            let result = iterator.next();

            if (result.done) {
                return defaultValue;
            }

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (comparer(result.value, value) < 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        }
    }

    last(predicate?: (element: TElement) => boolean): TElement {
        const iterator = this._source[Symbol.iterator]();

        if (predicate) {
            let result: IteratorResult<TElement>;

            do {
                result = iterator.next();
                if (result.done) {
                    throw noElements();
                }
            } while (!predicate(result.value));

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (predicate(result.value) && comparer(result.value, value) > 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        } else {
            let result = iterator.next();

            if (result.done) {
                throw noElements();
            }

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (comparer(result.value, value) > 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        }
    }

    lastOrDefault(predicate?: (element: TElement) => boolean, defaultValue: TElement = null): TElement {
        const iterator = this._source[Symbol.iterator]();

        if (predicate) {
            let result: IteratorResult<TElement>;

            do {
                result = iterator.next();
                if (result.done) {
                    return defaultValue;
                }
            } while (!predicate(result.value));

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (predicate(result.value) && comparer(result.value, value) > 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        } else {
            let result = iterator.next();

            if (result.done) {
                return defaultValue;
            }

            const comparer = this._getComparer();

            let value = result.value;

            result = iterator.next();

            while (!result.done) {
                if (comparer(result.value, value) > 0) {
                    value = result.value;
                }
                result = iterator.next();
            }

            return value;
        }
    }

    lastInPartition(minIndex: number, maxIndex: number): TElement {
        const array = Array.from(this._source);
        const count = array.length;
        const comparer = this._getComparer();

        if (minIndex >= count) {
            throw noElements();
        }
        if (maxIndex < count - 1) {
            return quickSelect(array, comparer, 0, count - 1, maxIndex);
        }

        let i = 1;
        let current = array[0];

        while (i < count) {
            let next = array[i];
            if (comparer(next, current) > 0) {
                current = next;
            }
            i++;
        }

        return current;
    }

    lastOrDefaultInPartition(minIndex: number, maxIndex: number, defaultValue: TElement = null): TElement {
        const array = Array.from(this._source);
        const count = array.length;
        const comparer = this._getComparer();

        if (minIndex >= count) {
            return defaultValue;
        }
        if (maxIndex < count - 1) {
            return quickSelect(array, comparer, 0, count - 1, maxIndex);
        }

        let i = 1;
        let current = array[0];

        while (i < count) {
            let next = array[i];
            if (comparer(next, current) > 0) {
                current = next;
            }
            i++;
        }

        return current;
    }

    elementAt(index: number): TElement {
        if (index === 0) {
            return this.first();
        }
        const array = Array.from(this._source);
        const count = array.length;
        if (index > count - 1) {
            throw noElements();
        }
        const comparer = this._getComparer();
        return quickSelect(array, comparer, 0, count - 1, index);
    }

    elementAtOrDefault(index: number, defaultValue: TElement = null): TElement {
        if (index === 0) {
            return this.firstOrDefault(null, defaultValue);
        }
        const array = Array.from(this._source);
        const count = array.length;
        if (index > count - 1) {
            return defaultValue;
        }
        const comparer = this._getComparer();
        return quickSelect(array, comparer, 0, count - 1, index);
    }

    toArray(): TElement[] {
        const comparer = this._getComparer();
        const array = Array.from(this._source);
        return array.sort(comparer);
    }

    toArrayInPartition(minIndex: number, maxIndex: number): TElement[] {
        const array = Array.from(this._source);
        const count = array.length;

        if (count > minIndex) {
            const comparer = this._getComparer();

            maxIndex = count > maxIndex ? maxIndex : count - 1;

            if (minIndex === maxIndex) {
                return [quickSelect(array, comparer, 0, count - 1, minIndex)];
            } else {
                partialQuickSort(array, comparer, 0, count - 1, minIndex, maxIndex);
                return array.slice(minIndex, maxIndex + 1);
            }
        }
        return [];
    }

    private _getComparer(next?: (first: TElement, second: TElement) => number): (first: TElement, second: TElement) => number {
        if (!next) {
            next = () => 0;
        }
        const comparer = (first: TElement, second: TElement): number => {
            const firstKey = this._keySelector(first);
            const secondKey = this._keySelector(second);
            if (firstKey < secondKey) {
                return this._descending ? 1 : -1;
            }
            if (firstKey > secondKey) {
                return this._descending ? -1 : 1;
            }
            return next(first, second);
        };
        return this._parent ? this._parent._getComparer(comparer) : comparer;
    }
}

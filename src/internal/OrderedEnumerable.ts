import OrderedPartition from './OrderedPartition';
import partialQuickSort from './partialQuickSort';
import quickSelect from './quickSelect';
import { Enumerable } from './Enumerable';
import { noElements } from './errors';

const defualtComparer: (first: any, second: any) => number = (first, second) => 0;

export default class OrderedEnumerable<TElement, TKey> extends Enumerable<TElement> {
    constructor(_source: Iterable<TElement>,
                private _keySelector: (value: TElement) => TKey,
                private _descending: boolean,
                private _parentComparer: (first: TElement, second: TElement) => number = defualtComparer) {
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

    thenBy<TKey>(keySelector: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, false, this._getComparer());
    }

    thenByDescending<TKey>(keySelector: (value: TElement) => TKey): OrderedEnumerable<TElement, TKey> {
        return new OrderedEnumerable(this._source, keySelector, true, this._getComparer());
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

    firstOrDefault(): TElement | null;
    firstOrDefault(predicate: (element: TElement) => boolean): TElement | null;
    firstOrDefault(predicate: ((element: TElement) => boolean) | null, defaultValue: TElement): TElement;
    firstOrDefault(predicate?: ((element: TElement) => boolean) | null, defaultValue: TElement | null = null): TElement | null {
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

    lastOrDefault(): TElement | null;
    lastOrDefault(predicate: (value: TElement) => boolean): TElement | null;
    lastOrDefault(predicate: ((value: TElement) => boolean) | null, defaultValue: TElement): TElement;
    lastOrDefault(predicate?: ((element: TElement) => boolean) | null, defaultValue: TElement | null = null): TElement | null {
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

    lastOrDefaultInPartition(minIndex: number, maxIndex: number, defaultValue: TElement | null = null): TElement | null {
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

    elementAtOrDefault(index: number): TElement | null;
    elementAtOrDefault(index: number, defaultValue: TElement): TElement;
    elementAtOrDefault(index: number, defaultValue: TElement | null = null): TElement | null {
        if (index === 0) {
            return this.firstOrDefault(null, defaultValue as TElement);
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

    private _getComparer(): (first: TElement, second: TElement) => number {
        const keySelector = this._keySelector;
        const descending = this._descending;
        const parentComparer = this._parentComparer;
        return (first: TElement, second: TElement): number => {
            const ordering = parentComparer(first, second);
            if (ordering != 0) {
                return ordering;
            }
            const firstKey = keySelector(first);
            const secondKey = keySelector(second);
            if (firstKey < secondKey) {
                return descending ? 1 : -1;
            }
            if (firstKey > secondKey) {
                return descending ? -1 : 1;
            }
            return 0;
        };
    }
}

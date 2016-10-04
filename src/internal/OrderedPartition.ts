import EmptyPartition from './EmptyPartition';
import OrderedEnumerable from './OrderedEnumerable';
import Partition from './Partition';
import { noElements } from './errors';

export default class OrderedPartition<TElement> extends Partition<TElement> {
    constructor(private _source: OrderedEnumerable<TElement, any>,
                private _minIndex: number,
                private _maxIndex: number) {
        super();
    }

    [Symbol.iterator](): Iterator<TElement> {
        return this._source.toArrayPartition(this._minIndex, this._maxIndex)[Symbol.iterator]();
    }

    skip(count: number): Partition<TElement> {
        const minIndex = this._minIndex + count;
        return minIndex > this._maxIndex
            ? new EmptyPartition<TElement>()
            : new OrderedPartition(this._source, minIndex, this._maxIndex);
    }

    take(count: number): Partition<TElement> {
        let maxIndex = this._minIndex + count - 1;
        if (maxIndex >= this._maxIndex) maxIndex = this._maxIndex;
        return new OrderedPartition(this._source, this._minIndex, maxIndex);
    }

    first(): TElement {
        return this._source.elementAt(this._minIndex);
    }

    firstOrDefault(defaultValue: TElement = null): TElement {
        return this._source.elementAtOrDefault(this._minIndex, defaultValue);
    }

    last(): TElement {
        return this._source.lastInPartition(this._minIndex, this._maxIndex);
    }

    lastOrDefault(defaultValue: TElement = null): TElement {
        return this._source.lastInPartitionOrDefault(this._minIndex, this._maxIndex, defaultValue);
    }

    elementAt(index: number): TElement {
        if (index > this._maxIndex - this._minIndex) {
            throw noElements();
        }
        return this._source.elementAt(index + this._minIndex);
    }

    elementAtOrDefault(index: number, defaultValue: TElement = null): TElement {
        if (index > this._maxIndex - this._minIndex) {
            return defaultValue;
        }
        return this._source.elementAtOrDefault(index + this._minIndex, defaultValue);
    }
}

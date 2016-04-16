import { argumentOutOfRange } from '../internal/errors'
import EmptyPartition from '../internal/EmptyPartition'
import Partition from '../internal/Partition'

export default function range(start: number, count: number): Iterable<number> {
    return new RangePartition(start, count);
}

class RangePartition extends Partition<number> {
    private _start: number;

    private _end: number;

    constructor(start: number, count: number) {
        super();
        this._start = start;
        this._end = start + count;
    }

    *[Symbol.iterator](): Iterator<number> {
        let current = this._start;
        let end = this._end;

        do {
            yield current;
            current++;
        } while (current < end);
    }

    get length(): number {
        return this._end - this._start;
    }

    skip(count: number): Partition<number> {
        if (count >= this._end - this._start) return new EmptyPartition<number>();
        return new RangePartition(this._start + count, this._end - this._start - count);
    }

    take(count: number): Partition<number> {
        const currentCount = this._end - this._start;
        return new RangePartition(this._start, count > currentCount ? currentCount : count);
    }

    elementAt(index: number): number {
        if (index >= this._end - this._start) throw argumentOutOfRange('index');
        return this._start + index;
    }

    elementAtOrDefault(index: number, defaultValue?: number): number {
        return index >= (this._end - this._start) ? defaultValue : this._start + index;
    }

    first(): number {
        return this._start;
    }

    firstOrDefault(defaultValue?: number): number {
        return this._start;
    }

    last(): number {
        return this._end - 1;
    }

    lastOrDefault(defaultValue?: number): number {
        return this._end - 1;
    }
}

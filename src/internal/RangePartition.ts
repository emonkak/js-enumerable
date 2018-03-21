import EmptyPartition from './EmptyPartition';
import { IPartition, partitionSymbol } from './partition';
import { argumentOutOfRange } from './errors';

export default class RangePartition implements IPartition<number> {
    private readonly _start: number;

    private readonly _end: number;

    constructor(start: number, count: number) {
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

    [partitionSymbol](): boolean {
        return true;
    }

    skip(count: number): IPartition<number> {
        if (count >= this._end - this._start) {
            return new EmptyPartition<number>();
        }
        return new RangePartition(this._start + count, this._end - this._start - count);
    }

    take(count: number): IPartition<number> {
        const currentCount = this._end - this._start;
        return new RangePartition(this._start, count > currentCount ? currentCount : count);
    }

    elementAt(index: number): number {
        if (index >= this._end - this._start) {
            throw argumentOutOfRange('index');
        }
        return this._start + index;
    }

    elementAtOrDefault(index: number): number | null;
    elementAtOrDefault(index: number, defaultValue: number): number;
    elementAtOrDefault(index: number, defaultValue: number | null = null): number | null {
        return index >= (this._end - this._start) ? defaultValue : this._start + index;
    }

    first(): number {
        return this._start;
    }

    firstOrDefault(): number | null;
    firstOrDefault(predicate: null, defaultValue: number): number;
    firstOrDefault(predicate?: null, defaultValue: number | null = null): number | null {
        return this._start;
    }

    last(): number {
        return this._end - 1;
    }

    lastOrDefault(): number | null;
    lastOrDefault(predicate: null, defaultValue: number): number;
    lastOrDefault(predicate?: null, defaultValue: number | null = null): number | null {
        return this._end - 1;
    }
}

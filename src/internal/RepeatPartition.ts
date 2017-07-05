import EmptyPartition from './EmptyPartition';
import Partition from './Partition';

export default class RepeatPartition<TResult> extends Partition<TResult> {
    constructor(private readonly _element: TResult, private readonly _count: number) {
        super();
    }

    *[Symbol.iterator](): Iterator<TResult> {
        for (let i = this._count; i > 0; i--) {
            yield this._element;
        }
    }

    skip(count: number): Partition<TResult> {
        if (count >= this._count) {
            return new EmptyPartition<TResult>();
        }
        return new RepeatPartition(this._element, this._count - count);
    }

    take(count: number): Partition<TResult> {
        return new RepeatPartition(this._element, count > this._count ? this._count : count);
    }

    elementAt(index: number): TResult {
        if (index >= this._count) {
            throw new Error('Sequence index is out of range.');
        }
        return this._element;
    }

    elementAtOrDefault(index: number): TResult | null;
    elementAtOrDefault(index: number, defaultValue: TResult): TResult;
    elementAtOrDefault(index: number, defaultValue: TResult | null = null): TResult | null {
        return index >= (this._count) ? defaultValue : this._element;
    }

    first(): TResult {
        return this._element;
    }

    firstOrDefault(): TResult | null;
    firstOrDefault(defaultValue: TResult): TResult;
    firstOrDefault(defaultValue: TResult | null = null): TResult | null {
        return this._element;
    }

    last(): TResult {
        return this._element;
    }

    lastOrDefault(): TResult | null;
    lastOrDefault(defaultValue: TResult): TResult;
    lastOrDefault(defaultValue: TResult | null = null): TResult | null {
        return this._element;
    }
}

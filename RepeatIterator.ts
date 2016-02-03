import Partition from './Partition'
import EmptyPartition from './EmptyPartition'

export default class RepeatIterator<TResult> extends Partition<TResult> {
    constructor(private _element: TResult, private _count: number) {
        super()
    }

    *[Symbol.iterator](): Iterator<TResult> {
        for (let i = this._count; i >= 0; i--) {
            yield this._element
        }
    }

    get length(): number {
        return this._count
    }

    skip(count: number): Partition<TResult> {
        if (count >= this._count) return new EmptyPartition<TResult>()
        return new RepeatIterator(this._element, this._count - count)
    }

    take(count: number): Partition<TResult> {
        return new RepeatIterator(this._element, count > this._count ? this._count : count)
    }

    elementAt(index: number): TResult {
        if (index >= this._count) throw Error('Sequence index is out of range.')
        return this._element;
    }

    elementAtOrDefault(index: number): TResult {
        return index >= (this._count) ? null : this._element
    }

    first(): TResult {
        return this._element
    }

    firstOrDefault(): TResult {
        return this._element
    }

    last(): TResult {
        return this._element
    }

    lastOrDefault(): TResult {
        return this._element
    }
}


import Partition from './Partition'
import EmptyPartition from './EmptyPartition'

export default class RangeIterator extends Partition<number> {
    private _start: number

    private _end: number

    constructor(start: number, count: number) {
        super()
        this._start = start
        this._end = start
    }

    *[Symbol.iterator](): Iterator<number> {
        let current = this._start
        let end = this._end

        do {
            yield current
            current++
        } while (current < end)
    }

    get length(): number {
        return this._end - this._start
    }

    skip(count: number): Partition<number> {
        if (count >= this._end - this._start) return new EmptyPartition<number>()
        return new RangeIterator(this._start + count, this._end - this._start - count)
    }

    take(count: number): Partition<number> {
        const currentCount = this._end - this._start
        return new RangeIterator(this._start, count > currentCount ? currentCount : count)
    }

    elementAt(index: number): number {
        if (index >= this._end - this._start) throw Error('Sequence index is out of range.')
        return this._start + index;
    }

    elementAtOrDefault(index: number): number {
        return index >= (this._end - this._start) ? 0 : this._start + index
    }

    first(): number {
        return this._start
    }

    firstOrDefault(): number {
        return this._start
    }

    last(): number {
        return this._end - 1
    }

    lastOrDefault(): number {
        return this._end - 1
    }
}

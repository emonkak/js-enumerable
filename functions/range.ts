import RangeIterator from '../RangeIterator'

export default function range(start: number, end: number): Iterable<number> {
    return new RangeIterator(start, end)
}

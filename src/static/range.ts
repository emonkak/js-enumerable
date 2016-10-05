import RangePartition from '../internal/RangePartition';

export default function range(start: number, count: number): Iterable<number> {
    return new RangePartition(start, count);
}

import toArrayFn from '../toArray';

export default function toArray<TSource>(): (source: Iterable<TSource>) => TSource[] {
    return (source) => toArrayFn.call(source);
}

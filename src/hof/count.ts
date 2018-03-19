import countFn from '../count';

export default function count<TSource>(predicate?: (item: TSource) => boolean): (source: Iterable<TSource>) => number {
    return (source) => countFn.call(source, predicate);
}

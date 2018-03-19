import lastFn from '../last';

export default function last<TSource>(predicate?: (value: TSource) => boolean): (source: Iterable<TSource>) => TSource {
    return (source) => lastFn.call(source, predicate);
}

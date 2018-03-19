import skipWhileFn from '../skipWhile';

export default function skipWhile<TSource>(predicate: (element: TSource) => boolean): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => skipWhileFn.call(source, predicate);
}

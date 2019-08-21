import memoizeFn from '../memoize';

export default function memoize<TSource>(): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => memoizeFn.call(source);
}

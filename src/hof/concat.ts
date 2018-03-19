import concatFn from '../concat';

export default function concat<TSource>(second: Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => concatFn.call(source, second);
}

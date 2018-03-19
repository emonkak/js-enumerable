import reverseFn from '../reverse';

export default function reverse<TSource>(): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => reverseFn.call(source);
}

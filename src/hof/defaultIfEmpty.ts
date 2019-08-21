import defaultIfEmptyFn from '../defaultIfEmpty';

export default function defaultIfEmpty<TSource>(defaultValue: TSource): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => defaultIfEmptyFn.call(source, defaultValue);
}

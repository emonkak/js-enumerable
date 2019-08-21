import unionFn from '../union';

export default function union<TSource>(second: Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => unionFn.call(source, second);
}

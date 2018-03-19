import exceptFn from '../except';

export default function except<TSource>(second: Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => exceptFn.call(source, second);
}

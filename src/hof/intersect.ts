import intersectFn from '../intersect';

export default function intersect<TSource>(second: Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => intersectFn.call(source, second);
}

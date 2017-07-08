import intersectFn from '../intersect';
import { Enumerable } from '../internal/Enumerable';

export default function intersect<TSource>(second: Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(intersectFn.call(source.source, second));
}

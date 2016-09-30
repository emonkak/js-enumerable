import { Enumerable } from '../Enumerable';
import intersectFn from '../intersect';

export default function intersect<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(intersectFn.call(this, second));
}

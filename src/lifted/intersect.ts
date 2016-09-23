import IEnumerable from '../IEnumerable';
import intersectFn from '../intersect';

export default function intersect<TSource>(this: IEnumerable<TSource>, second: Iterable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(intersectFn.call(this, second));
}

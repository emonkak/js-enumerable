import IEnumerable from '../IEnumerable';
import skipWhileFn from '../skipWhile';

export default function skipWhile<TSource>(this: IEnumerable<TSource>, predicate: (element: TSource) => boolean): IEnumerable<TSource> {
    return this.lift<TSource>(skipWhileFn.call(this, predicate));
}

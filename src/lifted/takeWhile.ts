import IEnumerable from '../IEnumerable';
import takeWhileFn from '../takeWhile';

export default function takeWhile<TSource>(this: IEnumerable<TSource>, predicate: (element: TSource) => boolean): IEnumerable<TSource> {
    return this.lift<TSource>(takeWhileFn.call(this, predicate));
}

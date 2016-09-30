import { Enumerable } from '../Enumerable';
import catchFn from '../catch';

export default function _catch<TSource, TException>(this: Enumerable<TSource>, handler: (exception: TException) => Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(catchFn.call(this, handler));
}

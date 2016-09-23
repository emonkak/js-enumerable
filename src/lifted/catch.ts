import IEnumerable from '../IEnumerable';
import catchFn from '../catch';

export default function _catch<TSource, TException>(this: IEnumerable<TSource>, handler: (exception: TException) => Iterable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(catchFn.call(this, handler));
}

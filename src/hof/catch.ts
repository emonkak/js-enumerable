import catchFn from '../catch';
import { Enumerable } from '../internal/Enumerable';

export default function _catch<TSource, TException>(handler: (exception: TException) => Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(catchFn.call(source.source, handler));
}

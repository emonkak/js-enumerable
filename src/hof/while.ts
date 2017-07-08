import whileFn from '../while';
import { Enumerable } from '../internal/Enumerable';

export default function _while<TSource>(condition: () => boolean): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(whileFn.call(source.source, condition));
}

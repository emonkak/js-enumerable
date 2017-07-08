import finallyFn from '../finally';
import { Enumerable } from '../internal/Enumerable';

export default function _finally<TSource>(finallyAction: () => void): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(finallyFn.call(source.source, finallyAction));
}

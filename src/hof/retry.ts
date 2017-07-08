import retryFn from '../retry';
import { Enumerable } from '../internal/Enumerable';

export default function retry<TSource>(retryCount?: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(retryFn.call(source.source, retryCount));
}

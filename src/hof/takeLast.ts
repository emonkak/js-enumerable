import takeLastFn from '../takeLast';
import { Enumerable } from '../internal/Enumerable';

export default function takeLast<TSource>(count: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(takeLastFn.call(source.source, count));
}

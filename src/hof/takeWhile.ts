import takeWhileFn from '../takeWhile';
import { Enumerable } from '../internal/Enumerable';

export default function takeWhile<TSource>(predicate: (element: TSource) => boolean): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(takeWhileFn.call(source.source, predicate));
}

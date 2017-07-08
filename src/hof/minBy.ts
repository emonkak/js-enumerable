import minByFn from '../minBy';
import { Enumerable } from '../internal/Enumerable';

export default function minBy<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(minByFn.call(source.source, keySelector));
}

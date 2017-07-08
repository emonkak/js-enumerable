import distinctFn from '../distinct';
import { Enumerable } from '../internal/Enumerable';

export default function distinct<TSource>(): (source: Enumerable<TSource>) => Enumerable<TSource>;
export default function distinct<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource>;
export default function distinct<TSource, TKey>(keySelector?: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(distinctFn.call(source.source, keySelector));
}

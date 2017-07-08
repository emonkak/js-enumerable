import distinctUntilChangedFn from '../distinctUntilChanged';
import { Enumerable } from '../internal/Enumerable';

export default function distinctUntilChanged<TSource>(): (source: Enumerable<TSource>) => Enumerable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(keySelector: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(keySelector?: (element: TSource) => TKey): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(distinctUntilChangedFn.call(source.source, keySelector));
}

import firstOrDefaultFn from '../firstOrDefault';
import { Enumerable } from '../internal/Enumerable';

export default function firstOrDefault<TSource>(): (source: Enumerable<TSource>) => TSource | null;
export default function firstOrDefault<TSource>(predicate: (element: TSource) => boolean): (source: Enumerable<TSource>) => TSource | null;
export default function firstOrDefault<TSource>(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): (source: Enumerable<TSource>) => TSource;
export default function firstOrDefault<TSource>(predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Enumerable<TSource>) => TSource | null {
    return (source) => firstOrDefaultFn.call(source, predicate, defaultValue);
}

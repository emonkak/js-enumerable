import lastOrDefaultFn from '../lastOrDefault';
import { Enumerable } from '../internal/Enumerable';

export default function lastOrDefault<TSource>(): (source: Enumerable<TSource>) => TSource | null;
export default function lastOrDefault<TSource>(predicate: (value: TSource) => boolean): (source: Enumerable<TSource>) => TSource | null;
export default function lastOrDefault<TSource>(predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): (source: Enumerable<TSource>) => TSource;
export default function lastOrDefault<TSource>(predicate?: ((value: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Enumerable<TSource>) => TSource | null {
    return (source) => lastOrDefaultFn.call(source, predicate, defaultValue);
}

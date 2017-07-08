import singleOrDefaultFn from '../singleOrDefault';
import { Enumerable } from '../internal/Enumerable';

export default function singleOrDefault<TSource>(): (source: Enumerable<TSource>) => TSource | null;
export default function singleOrDefault<TSource>(predicate: (element: TSource) => boolean): (source: Enumerable<TSource>) => TSource | null;
export default function singleOrDefault<TSource>(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): (source: Enumerable<TSource>) => TSource;
export default function singleOrDefault<TSource>(predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Enumerable<TSource>) => TSource | null {
    return (source) => singleOrDefaultFn.call(source, predicate, defaultValue);
}

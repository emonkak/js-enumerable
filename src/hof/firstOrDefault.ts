import firstOrDefaultFn from '../firstOrDefault';

export default function firstOrDefault<TSource>(): (source: Iterable<TSource>) => TSource | null;
export default function firstOrDefault<TSource>(predicate: (element: TSource) => boolean): (source: Iterable<TSource>) => TSource | null;
export default function firstOrDefault<TSource>(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): (source: Iterable<TSource>) => TSource;
export default function firstOrDefault<TSource>(predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Iterable<TSource>) => TSource | null {
    return (source) => firstOrDefaultFn.call(source, predicate, defaultValue);
}

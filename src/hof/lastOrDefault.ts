import lastOrDefaultFn from '../lastOrDefault';

export default function lastOrDefault<TSource>(): (source: Iterable<TSource>) => TSource | null;
export default function lastOrDefault<TSource>(predicate: (value: TSource) => boolean): (source: Iterable<TSource>) => TSource | null;
export default function lastOrDefault<TSource>(predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): (source: Iterable<TSource>) => TSource;
export default function lastOrDefault<TSource>(predicate?: ((value: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Iterable<TSource>) => TSource | null {
    return (source) => lastOrDefaultFn.call(source, predicate, defaultValue);
}

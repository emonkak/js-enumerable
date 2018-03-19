import singleOrDefaultFn from '../singleOrDefault';

export default function singleOrDefault<TSource>(): (source: Iterable<TSource>) => TSource | null;
export default function singleOrDefault<TSource>(predicate: (element: TSource) => boolean): (source: Iterable<TSource>) => TSource | null;
export default function singleOrDefault<TSource>(predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): (source: Iterable<TSource>) => TSource;
export default function singleOrDefault<TSource>(predicate?: ((element: TSource) => boolean) | null, defaultValue: TSource | null = null): (source: Iterable<TSource>) => TSource | null {
    return (source) => singleOrDefaultFn.call(source, predicate, defaultValue);
}

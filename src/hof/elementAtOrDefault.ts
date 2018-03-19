import elementAtOrDefaultFn from '../elementAtOrDefault';

export default function elementAtOrDefault<TSource>(index: number): (source: Iterable<TSource>) => TSource | null;
export default function elementAtOrDefault<TSource>(index: number, defaultValue: TSource): (source: Iterable<TSource>) => TSource;
export default function elementAtOrDefault<TSource>(index: number, defaultValue: TSource | null = null): (source: Iterable<TSource>) => TSource | null {
    return (source) => elementAtOrDefaultFn.call(source, index, defaultValue);
}

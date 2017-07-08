import elementAtOrDefaultFn from '../elementAtOrDefault';
import { Enumerable } from '../internal/Enumerable';

export default function elementAtOrDefault<TSource>(index: number): (source: Enumerable<TSource>) => TSource | null;
export default function elementAtOrDefault<TSource>(index: number, defaultValue: TSource): (source: Enumerable<TSource>) => TSource;
export default function elementAtOrDefault<TSource>(index: number, defaultValue: TSource | null = null): (source: Enumerable<TSource>) => TSource | null {
    return (source) => elementAtOrDefaultFn.call(source, index, defaultValue);
}

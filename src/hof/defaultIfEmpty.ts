import defaultIfEmptyFn from '../defaultIfEmpty';
import { Enumerable } from '../internal/Enumerable';

export default function defaultIfEmpty<TSource>(defaultValue: TSource): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(defaultIfEmptyFn.call(source.source, defaultValue));
}

import toArrayFn from '../toArray';
import { Enumerable } from '../internal/Enumerable';

export default function toArray<TSource>(): (source: Enumerable<TSource>) => TSource[] {
    return (source) => toArrayFn.call(source);
}

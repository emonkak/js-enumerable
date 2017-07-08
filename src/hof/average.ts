import averageFn from '../average';
import { Enumerable } from '../internal/Enumerable';

export default function average<TSource>(selector?: (element: TSource) => number): (source: Enumerable<TSource>) => number {
    return (source) => averageFn.call(source, selector);
}

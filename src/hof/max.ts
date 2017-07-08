import maxFn from '../max';
import { Enumerable } from '../internal/Enumerable';

export default function max<TSource>(selector?: (element: TSource) => number): (source: Enumerable<TSource>) => number {
    return (source) => maxFn.call(source, selector);
}

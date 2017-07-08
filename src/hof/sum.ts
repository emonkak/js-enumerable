import sumFn from '../sum';
import { Enumerable } from '../internal/Enumerable';

export default function sum<TSource>(selector?: (element: TSource) => number): (source: Enumerable<TSource>) => number {
    return (source) => sumFn.call(source, selector);
}

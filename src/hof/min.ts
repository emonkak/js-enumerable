import minFn from '../min';
import { Enumerable } from '../internal/Enumerable';

export default function min<TSource>(selector?: (element: TSource) => number): (source: Enumerable<TSource>) => number {
    return (source) => minFn.call(source, selector);
}

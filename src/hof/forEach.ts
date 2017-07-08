import forEachFn from '../forEach';
import { Enumerable } from '../internal/Enumerable';

export default function forEach<TSource>(action: (element: TSource) => void): (source: Enumerable<TSource>) => void {
    return (source) => forEachFn.call(source, action);
}

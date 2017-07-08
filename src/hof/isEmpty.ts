import isEmptyFn from '../isEmpty';
import { Enumerable } from '../internal/Enumerable';

export default function isEmpty<TSource>(): (source: Enumerable<TSource>) => boolean {
    return (source) => isEmptyFn.call(source);
}

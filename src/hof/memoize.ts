import memoizeFn from '../memoize';
import { Enumerable } from '../internal/Enumerable';

export default function memoize<TSource>(): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(memoizeFn.call(source.source));
}

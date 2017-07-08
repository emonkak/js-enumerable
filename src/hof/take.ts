import takeFn from '../take';
import { Enumerable } from '../internal/Enumerable';

export default function take<TSource>(count: number): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(takeFn.call(source.source, count));
}

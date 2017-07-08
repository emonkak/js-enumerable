import unionFn from '../union';
import { Enumerable } from '../internal/Enumerable';

export default function union<TSource>(second: Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(unionFn.call(source.source, second));
}

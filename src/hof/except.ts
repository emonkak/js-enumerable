import exceptFn from '../except';
import { Enumerable } from '../internal/Enumerable';

export default function except<TSource>(second: Iterable<TSource>): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(exceptFn.call(source.source, second));
}

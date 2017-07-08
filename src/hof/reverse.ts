import reverseFn from '../reverse';
import { Enumerable } from '../internal/Enumerable';

export default function reverse<TSource>(): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(reverseFn.call(source.source));
}

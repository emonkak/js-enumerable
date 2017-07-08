import ignoreElementsFn from '../ignoreElements';
import { Enumerable } from '../internal/Enumerable';

export default function ignoreElements<TSource>(): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(ignoreElementsFn.call(source.source));
}

import startWithFn from '../startWith';
import { Enumerable } from '../internal/Enumerable';

export default function startWith<TSource>(...elements: TSource[]): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(startWithFn.apply(source.source, elements));
}

import elementAtFn from '../elementAt';
import { Enumerable } from '../internal/Enumerable';

export default function elementAt<TSource>(index: number): (source: Enumerable<TSource>) => TSource {
    return (source) => elementAtFn.call(source, index);
}

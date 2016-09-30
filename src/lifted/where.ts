import { Enumerable } from '../Enumerable';
import whereFn from '../where';

export default function where<TSource>(this: Enumerable<TSource>, predicate: (item: TSource) => boolean): Enumerable<TSource> {
    return this.lift<TSource>(whereFn.call(this, predicate));
}

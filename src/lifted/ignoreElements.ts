import { Enumerable } from '../Enumerable';
import ignoreElementsFn from '../ignoreElements';

export default function ignoreElements<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(ignoreElementsFn.call(this));
}

import { Enumerable } from '../Enumerable';
import defaultIfEmptyFn from '../defaultIfEmpty';

export default function defaultIfEmpty<TSource>(this: Enumerable<TSource>, defaultValue: TSource): Enumerable<TSource> {
    return this.lift<TSource>(defaultIfEmptyFn.call(this, defaultValue));
}

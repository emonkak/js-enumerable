import { Enumerable } from '../Enumerable';
import reverseFn from '../reverse';

export default function reverse<TSource>(this: Enumerable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(reverseFn.call(this));
}

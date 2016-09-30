import { Enumerable } from '../Enumerable';
import finallyFn from '../finally';

export default function _finally<TSource>(this: Enumerable<TSource>, finallyAction: () => void): Enumerable<TSource> {
    return this.lift<TSource>(finallyFn.call(this, finallyAction));
}

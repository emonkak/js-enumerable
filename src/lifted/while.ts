import { Enumerable } from '../Enumerable';
import whileFn from '../while';

export default function _while<TSource>(this: Enumerable<TSource>, condition: () => boolean): Enumerable<TSource> {
    return this.lift<TSource>(whileFn.call(this, condition));
}

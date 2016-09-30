import { Enumerable } from '../Enumerable';
import doWhileFn from '../doWhile';

export default function doWhile<TSource>(this: Enumerable<TSource>, condition: () => boolean): Enumerable<TSource> {
    return this.lift<TSource>(doWhileFn.call(this, condition));
}

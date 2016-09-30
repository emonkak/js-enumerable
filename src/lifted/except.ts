import { Enumerable } from '../Enumerable';
import exceptFn from '../except';

export default function except<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(exceptFn.call(this, second));
}

import { Enumerable } from '../Enumerable';
import unionFn from '../union';

export default function union<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(unionFn.call(this, second));
}

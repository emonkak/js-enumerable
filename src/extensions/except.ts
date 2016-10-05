import exceptFn from '../except';
import { Enumerable } from '../internal/Enumerable';

function except<TSource>(this: Enumerable<TSource>, second: Iterable<TSource>): Enumerable<TSource> {
    return this.lift<TSource>(exceptFn.call(this.source, second));
}

Enumerable.prototype.except = except;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        except(second: Iterable<TSource>): Enumerable<TSource>;
    }
}

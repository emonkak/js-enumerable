import distinctUntilChangedFn from '../distinctUntilChanged';
import { Enumerable } from '../internal/Enumerable';

function distinctUntilChanged<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
function distinctUntilChanged<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(distinctUntilChangedFn.call(this, keySelector));
}

Enumerable.prototype.distinctUntilChanged = distinctUntilChanged;

declare module '../internal/Enumerable' {
    interface Enumerable<TSource> {
        distinctUntilChanged(): Enumerable<TSource>;
        distinctUntilChanged<TKey>(keySelector?: (element: TSource) => TKey): Enumerable<TSource>;
    }
}

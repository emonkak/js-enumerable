import { Enumerable } from '../Enumerable';
import distinctUntilChangedFn from '../distinctUntilChanged';

export default function distinctUntilChanged<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
export default function distinctUntilChanged<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(distinctUntilChangedFn.call(this, keySelector));
}

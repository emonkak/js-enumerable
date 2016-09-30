import { Enumerable } from '../Enumerable';
import distinctFn from '../distinct';

export default function distinct<TSource>(this: Enumerable<TSource>): Enumerable<TSource>;
export default function distinct<TSource, TKey>(this: Enumerable<TSource>, keySelector?: (element: TSource) => TKey): Enumerable<TSource> {
    return this.lift<TSource>(distinctFn.call(this, keySelector));
}

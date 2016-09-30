import staticCatchFn from '../../static/catch';
import { Enumerable } from '../../Enumerable';

export default function staticCatch<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(staticCatchFn(...sources));
}

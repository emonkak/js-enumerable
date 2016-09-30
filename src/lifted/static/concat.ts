import staticConcatFn from '../../static/concat';
import { Enumerable } from '../../Enumerable';

export default function staticConcat<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
    return new Enumerable(staticConcatFn(...sources));
}

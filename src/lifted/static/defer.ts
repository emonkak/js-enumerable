import staticDeferFn from '../../static/defer';
import { Enumerable } from '../../Enumerable';

export default function staticDefer<TSource>(iterableFactory: () => Iterable<TSource>): Enumerable<TSource> {
    return new Enumerable(staticDeferFn(iterableFactory));
}

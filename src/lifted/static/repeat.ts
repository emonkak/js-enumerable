import staticRepeatFn from '../../static/repeat';
import { Enumerable } from '../../Enumerable';

export default function staticRepeat<TSource>(element: TSource, count?: number): Enumerable<TSource> {
    return new Enumerable(staticRepeatFn(element, count));
}

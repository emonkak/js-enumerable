import staticReturnFn from '../../static/return';
import { Enumerable } from '../../Enumerable';

export default function staticReturn<TSource>(element: TSource): Enumerable<TSource> {
    return new Enumerable(staticReturnFn(element));
}

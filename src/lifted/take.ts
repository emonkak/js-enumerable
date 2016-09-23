import IEnumerable from '../IEnumerable';
import takeFn from '../take';

export default function take<TSource>(this: IEnumerable<TSource>, count: number): IEnumerable<TSource> {
    return this.lift<TSource>(takeFn.call(this, count));
}

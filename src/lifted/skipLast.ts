import IEnumerable from '../IEnumerable';
import skipLastFn from '../skipLast';

export default function skipLast<TSource>(this: IEnumerable<TSource>, count: number): IEnumerable<TSource> {
    return this.lift<TSource>(skipLastFn.call(this, count));
}

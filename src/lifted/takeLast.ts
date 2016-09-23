import IEnumerable from '../IEnumerable';
import takeLastFn from '../takeLast';

export default function takeLast<TSource>(this: IEnumerable<TSource>, count: number): IEnumerable<TSource> {
    return this.lift<TSource>(takeLastFn.call(this, count));
}

import IEnumerable from '../IEnumerable';
import retryFn from '../retry';

export default function retry<TSource>(this: IEnumerable<TSource>, retryCount?: number): IEnumerable<TSource> {
    return this.lift<TSource>(retryFn.call(this, retryCount));
}

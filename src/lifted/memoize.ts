import IEnumerable from '../IEnumerable';
import memoizeFn from '../memoize';

export default function memoize<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(memoizeFn.call(this));
}

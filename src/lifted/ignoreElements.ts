import IEnumerable from '../IEnumerable';
import ignoreElementsFn from '../ignoreElements';

export default function ignoreElements<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(ignoreElementsFn.call(this));
}

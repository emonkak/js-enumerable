import IEnumerable from '../IEnumerable';
import exceptFn from '../except';

export default function except<TSource>(this: IEnumerable<TSource>, second: Iterable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(exceptFn.call(this, second));
}

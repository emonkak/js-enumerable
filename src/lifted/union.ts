import IEnumerable from '../IEnumerable';
import unionFn from '../union';

export default function union<TSource>(this: IEnumerable<TSource>, second: Iterable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(unionFn.call(this, second));
}

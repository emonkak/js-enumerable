import IEnumerable from '../IEnumerable';
import defaultIfEmptyFn from '../defaultIfEmpty';

export default function defaultIfEmpty<TSource>(this: IEnumerable<TSource>, defaultValue: TSource): IEnumerable<TSource> {
    return this.lift<TSource>(defaultIfEmptyFn.call(this, defaultValue));
}

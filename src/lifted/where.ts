import IEnumerable from '../IEnumerable';
import whereFn from '../where';

export default function where<TSource>(this: IEnumerable<TSource>, predicate: (item: TSource) => boolean): IEnumerable<TSource> {
    return this.lift<TSource>(whereFn.call(this, predicate));
}

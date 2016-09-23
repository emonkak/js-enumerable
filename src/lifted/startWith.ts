import IEnumerable from '../IEnumerable';
import startWithFn from '../startWith';

export default function startWith<TSource>(this: IEnumerable<TSource>, ...elements: TSource[]): IEnumerable<TSource> {
    return this.lift<TSource>(startWithFn.apply(this, elements));
}

import ILiftable from '../internal/ILiftable';
import startWithFn from '../startWith';

export default function startWith<TSource>(this: ILiftable<TSource>, ...elements: TSource[]): ILiftable<TSource> {
    return this.lift<TSource>(startWithFn.apply(this, elements));
}

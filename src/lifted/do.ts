import ILiftable from '../internal/ILiftable';
import doFn from '../do';

export default function _do<TSource>(this: ILiftable<TSource>, action: (element: TSource) => void): ILiftable<TSource> {
    return this.lift<TSource>(doFn.call(this, action));
}


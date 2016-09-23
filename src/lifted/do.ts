import IEnumerable from '../IEnumerable';
import doFn from '../do';

export default function _do<TSource>(this: IEnumerable<TSource>, action: (element: TSource) => void): IEnumerable<TSource> {
    return this.lift<TSource>(doFn.call(this, action));
}


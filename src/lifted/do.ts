import { Enumerable } from '../Enumerable';
import doFn from '../do';

export default function _do<TSource>(this: Enumerable<TSource>, action: (element: TSource) => void): Enumerable<TSource> {
    return this.lift<TSource>(doFn.call(this, action));
}


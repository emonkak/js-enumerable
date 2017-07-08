import doFn from '../do';
import { Enumerable } from '../internal/Enumerable';

export default function _do<TSource>(action: (element: TSource) => void): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(doFn.call(source.source, action));
}

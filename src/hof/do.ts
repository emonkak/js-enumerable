import doFn from '../do';

export default function _do<TSource>(action: (element: TSource) => void): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => doFn.call(source, action);
}

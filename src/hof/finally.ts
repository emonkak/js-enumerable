import finallyFn from '../finally';

export default function _finally<TSource>(finallyAction: () => void): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => finallyFn.call(source, finallyAction);
}

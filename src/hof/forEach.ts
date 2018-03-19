import forEachFn from '../forEach';

export default function forEach<TSource>(action: (element: TSource) => void): (source: Iterable<TSource>) => void {
    return (source) => forEachFn.call(source, action);
}

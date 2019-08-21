import averageFn from '../average';

export default function average<TSource>(selector?: (element: TSource) => number): (source: Iterable<TSource>) => number {
    return (source) => averageFn.call(source, selector);
}

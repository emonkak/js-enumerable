import maxFn from '../max';

export default function max<TSource>(selector?: (element: TSource) => number): (source: Iterable<TSource>) => number {
    return (source) => maxFn.call(source, selector);
}

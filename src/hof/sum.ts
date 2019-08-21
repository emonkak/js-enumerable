import sumFn from '../sum';

export default function sum<TSource>(selector?: (element: TSource) => number): (source: Iterable<TSource>) => number {
    return (source) => sumFn.call(source, selector);
}

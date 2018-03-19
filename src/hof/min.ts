import minFn from '../min';

export default function min<TSource>(selector?: (element: TSource) => number): (source: Iterable<TSource>) => number {
    return (source) => minFn.call(source, selector);
}

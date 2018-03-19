import anyFn from '../any';

export default function any<TSource>(predicate?: (element: TSource) => boolean): (source: Iterable<TSource>) => boolean {
    return (source) => anyFn.call(source, predicate);
}

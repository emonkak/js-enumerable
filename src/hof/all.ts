import allFn from '../all';

export default function all<TSource>(predicate?: (element: TSource) => boolean): (source: Iterable<TSource>) => boolean {
    return (source) => allFn.call(source, predicate);
}

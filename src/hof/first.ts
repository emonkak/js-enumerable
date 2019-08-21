import firstFn from '../first';

export default function first<TSource>(predicate?: (element: TSource) => boolean): (source: Iterable<TSource>) => TSource {
    return (source) => firstFn.call(source, predicate);
}

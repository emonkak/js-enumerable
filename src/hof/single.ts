import singleFn from '../single';

export default function single<TSource>(predicate?: (element: TSource) => boolean): (source: Iterable<TSource>) => TSource {
    return (source) => singleFn.call(source, predicate);
}

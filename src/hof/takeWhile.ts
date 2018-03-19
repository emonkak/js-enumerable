import takeWhileFn from '../takeWhile';

export default function takeWhile<TSource>(predicate: (element: TSource) => boolean): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => takeWhileFn.call(source, predicate);
}

import whereFn from '../where';

export default function where<TSource>(predicate: (item: TSource) => boolean): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => whereFn.call(source, predicate);
}

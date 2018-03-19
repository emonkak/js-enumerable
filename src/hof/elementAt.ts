import elementAtFn from '../elementAt';

export default function elementAt<TSource>(index: number): (source: Iterable<TSource>) => TSource {
    return (source) => elementAtFn.call(source, index);
}

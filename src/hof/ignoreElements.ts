import ignoreElementsFn from '../ignoreElements';

export default function ignoreElements<TSource>(): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => ignoreElementsFn.call(source);
}

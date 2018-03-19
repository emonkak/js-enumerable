import isEmptyFn from '../isEmpty';

export default function isEmpty<TSource>(): (source: Iterable<TSource>) => boolean {
    return (source) => isEmptyFn.call(source);
}

import whileFn from '../while';

export default function _while<TSource>(condition: () => boolean): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => whileFn.call(source, condition);
}

import catchFn from '../catch';

export default function _catch<TSource, TException>(handler: (exception: TException) => Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => catchFn.call(source, handler);
}

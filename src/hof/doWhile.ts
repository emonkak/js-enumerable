import doWhileFn from '../doWhile';

export default function doWhile<TSource>(condition: () => boolean): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => doWhileFn.call(source, condition);
}

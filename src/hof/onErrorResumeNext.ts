import onErrorResumeNextFn from '../onErrorResumeNext';

export default function onErrorResumeNext<TSource>(second: Iterable<TSource>): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => onErrorResumeNextFn.call(source, second);
}

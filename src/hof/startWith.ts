import startWithFn from '../startWith';

export default function startWith<TSource>(...elements: TSource[]): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => startWithFn.apply(source, elements);
}

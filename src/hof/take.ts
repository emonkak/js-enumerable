import takeFn from '../take';

export default function take<TSource>(count: number): (source: Iterable<TSource>) => Iterable<TSource> {
    return (source) => takeFn.call(source, count);
}

import selectFn from '../select';

export default function select<TSource, TResult>(selector: (element: TSource) => TResult): (source: Iterable<TSource>) => Iterable<TResult> {
    return (source) => selectFn.call(source, selector);
}

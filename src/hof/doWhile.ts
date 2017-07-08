import doWhileFn from '../doWhile';
import { Enumerable } from '../internal/Enumerable';

export default function doWhile<TSource>(condition: () => boolean): (source: Enumerable<TSource>) => Enumerable<TSource> {
    return (source) => source.lift<TSource>(doWhileFn.call(source.source, condition));
}

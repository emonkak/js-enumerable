import repeatFn from '../../static/repeat';
import { Enumerable } from '../../internal/Enumerable';

function repeat<TSource>(element: TSource, count?: number): Enumerable<TSource> {
    return new Enumerable(repeatFn(element, count));
}

Enumerable.repeat = repeat;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function repeat<TSource>(element: TSource, count?: number): Enumerable<TSource>;
    }
}

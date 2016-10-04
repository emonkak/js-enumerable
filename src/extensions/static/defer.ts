import deferFn from '../../static/defer';
import { Enumerable } from '../../internal/Enumerable';

function defer<TSource>(iterableFactory: () => Iterable<TSource>): Enumerable<TSource> {
    return new Enumerable(deferFn(iterableFactory));
}

Enumerable.defer = defer;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function defer<TSource>(iterableFactory: () => Iterable<TSource>): Enumerable<TSource>;
    }
}

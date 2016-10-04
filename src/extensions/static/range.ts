import rangeFn from '../../static/range';
import { Enumerable } from '../../internal/Enumerable';

function range(start: number, count: number): Enumerable<number> {
    return new Enumerable(rangeFn(start, count));
}

Enumerable.range = range;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function range(start: number, count: number): Enumerable<number>;
    }
}

import skip from '../lifted/skip';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.skip = skip;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        skip: typeof skip;
    }
}

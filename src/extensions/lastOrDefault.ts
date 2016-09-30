import lastOrDefault from '../lastOrDefault';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.lastOrDefault = lastOrDefault;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        lastOrDefault: typeof lastOrDefault;
    }
}

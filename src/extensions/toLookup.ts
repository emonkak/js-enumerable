import toLookup from '../toLookup';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.toLookup = toLookup;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        toLookup: typeof toLookup;
    }
}

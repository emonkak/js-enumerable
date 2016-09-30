import toDictionary from '../toDictionary';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.toDictionary = toDictionary;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        toDictionary: typeof toDictionary;
    }
}

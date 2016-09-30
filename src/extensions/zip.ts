import zip from '../lifted/zip';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.zip = zip;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        zip: typeof zip;
    }
}

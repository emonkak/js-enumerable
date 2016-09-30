import distinctUntilChanged from '../lifted/distinctUntilChanged';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.distinctUntilChanged = distinctUntilChanged;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        distinctUntilChanged: typeof distinctUntilChanged;
    }
}

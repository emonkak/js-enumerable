import selectMany from '../lifted/selectMany';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.selectMany = selectMany;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        selectMany: typeof selectMany;
    }
}

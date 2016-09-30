import groupJoin from '../lifted/groupJoin';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.groupJoin = groupJoin;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        groupJoin: typeof groupJoin;
    }
}

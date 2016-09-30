import except from '../except';
import { Enumerable } from '../Enumerable';

Enumerable.prototype.except = except;

declare module '../Enumerable' {
    interface Enumerable<TSource> {
        except: typeof except;
    }
}

import staticConcat from '../../lifted/static/concat';
import { Enumerable } from '../../Enumerable';

Enumerable.concat = staticConcat;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let concat: typeof staticConcat;
    }
}

import staticRange from '../../lifted/static/range';
import { Enumerable } from '../../Enumerable';

Enumerable.range = staticRange;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let range: typeof staticRange;
    }
}

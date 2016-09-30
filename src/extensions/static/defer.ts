import staticDefer from '../../lifted/static/defer';
import { Enumerable } from '../../Enumerable';

Enumerable.defer = staticDefer;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let defer: typeof staticDefer;
    }
}

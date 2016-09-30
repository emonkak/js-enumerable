import staticCatch from '../../lifted/static/catch';
import { Enumerable } from '../../Enumerable';

Enumerable._catch = staticCatch;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let _catch: typeof staticCatch;
    }
}

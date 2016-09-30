import staticReturn from '../../lifted/static/return';
import { Enumerable } from '../../Enumerable';

Enumerable._return = staticReturn;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let _return: typeof staticReturn;
    }
}

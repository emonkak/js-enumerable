import staticIf from '../../lifted/static/if';
import { Enumerable } from '../../Enumerable';

Enumerable._if = staticIf;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let _if: typeof staticIf;
    }
}

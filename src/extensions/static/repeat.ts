import staticRepeat from '../../lifted/static/repeat';
import { Enumerable } from '../../Enumerable';

Enumerable.repeat = staticRepeat;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let repeat: typeof staticRepeat;
    }
}

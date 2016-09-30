import staticGenerate from '../../lifted/static/generate';
import { Enumerable } from '../../Enumerable';

Enumerable.generate = staticGenerate;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let generate: typeof staticGenerate;
    }
}

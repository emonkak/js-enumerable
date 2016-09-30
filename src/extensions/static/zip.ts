import staticZip from '../../lifted/static/zip';
import { Enumerable } from '../../Enumerable';

Enumerable.zip = staticZip;

declare module '../../Enumerable' {
    namespace Enumerable {
        export let zip: typeof staticZip;
    }
}

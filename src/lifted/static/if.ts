import staticIfFn from '../../static/if';
import { Enumerable } from '../../Enumerable';

export default function staticIf<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Enumerable<TResult> {
    return new Enumerable(staticIfFn(condition, thenSource, elseSource));
}

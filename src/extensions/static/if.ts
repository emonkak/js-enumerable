import ifFn from '../../static/if';
import { Enumerable } from '../../internal/Enumerable';

function _if<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Enumerable<TResult> {
    return new Enumerable(ifFn(condition, thenSource, elseSource));
}

Enumerable._if = _if;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function _if<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Enumerable<TResult>;
    }
}

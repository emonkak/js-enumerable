import generateFn from '../../static/generate';
import { Enumerable } from '../../internal/Enumerable';

function generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult): Enumerable<TResult> {
    return new Enumerable(generateFn(initialState, condition, iterate, resultSelector));
}

Enumerable.generate = generate;

declare module '../../internal/Enumerable' {
    namespace Enumerable {
        export function generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult): Enumerable<TResult>;
    }
}

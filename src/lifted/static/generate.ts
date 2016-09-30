import staticGenerateFn from '../../static/generate';
import { Enumerable } from '../../Enumerable';

export default function staticGenerate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult): Enumerable<TResult> {
    return new Enumerable(staticGenerateFn(initialState, condition, iterate, resultSelector));
}

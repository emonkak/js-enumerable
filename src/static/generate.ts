export default function* generate<TState, TResult>(
    initialState: TState,
    condition: (state: TState) => boolean,
    iterate: (state: TState) => TState,
    resultSelector: (state: TState) => TResult
): Iterable<TResult> {
    for (let state = initialState; condition(state); state = iterate(state)) {
        yield resultSelector(state)
    }
}

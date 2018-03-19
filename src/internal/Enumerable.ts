import Operator from './Operator';

export class Enumerable<TSource> implements Iterable<TSource> {
    constructor(protected readonly _source: Iterable<TSource>) {
    }

    get source(): Iterable<TSource> {
        return this._source;
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    pipe<T1>(op: Operator<TSource, T1>): Enumerable<T1>;
    pipe<T1, T2>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>): Enumerable<T2>;
    pipe<T1, T2, T3>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>): Enumerable<T3>;
    pipe<T1, T2, T3, T4>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>): Enumerable<T4>;
    pipe<T1, T2, T3, T4, T5>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>, op5: Operator<T4, T5>): Enumerable<T5>;
    pipe<T1, T2, T3, T4, T5, T6>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>, op5: Operator<T4, T5>, op6: Operator<T5, T6>): Enumerable<T6>;
    pipe<T1, T2, T3, T4, T5, T6, T7>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>, op5: Operator<T4, T5>, op6: Operator<T5, T6>, op7: Operator<T6, T7>): Enumerable<T7>;
    pipe<T1, T2, T3, T4, T5, T6, T7, T8>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>, op5: Operator<T4, T5>, op6: Operator<T5, T6>, op7: Operator<T6, T7>, op8: Operator<T7, T8>): Enumerable<T8>;
    pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(op1: Operator<TSource, T1>, op2: Operator<T1, T2>, op3: Operator<T2, T3>, op4: Operator<T3, T4>, op5: Operator<T4, T5>, op6: Operator<T5, T6>, op7: Operator<T6, T7>, op8: Operator<T7, T8>, op9: Operator<T8, T9>): Enumerable<T9>;
    pipe<TResult>(...operators: Operator<any, any>[]): Enumerable<TResult> {
        return this.lift(operators.reduce((source, operator) => operator(source), this.source));
    }

    let<TResult>(func: (source: Iterable<TSource>) => TResult): TResult {
        return func(this.source);
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }
}

export class Enumerable<TSource> implements Iterable<TSource> {
    constructor(protected _source: Iterable<TSource>) {
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }
}

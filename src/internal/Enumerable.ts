export class Enumerable<TSource> implements Iterable<TSource> {
    constructor(protected readonly _source: Iterable<TSource>) {
    }

    get source(): Iterable<TSource> {
        return this._source;
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }
}

export class Enumerable<TSource> implements Iterable<TSource> {
    constructor(protected readonly _source: Iterable<TSource>) {
    }

    get source(): Iterable<TSource> {
        return this._source;
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    let<TResult>(func: (source: Enumerable<TSource>) => TResult): TResult {
        return func(this);
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }
}

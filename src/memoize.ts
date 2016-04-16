export default function memoize<TSource>(): Iterable<TSource> {
    return new MemoizeIterator(this[Symbol.iterator]() as Iterator<TSource>);
}

class MemoizeIterator<TElement> implements Iterable<TElement> {
    private _buffer: TElement[] = [];

    private _bufferSize: number = 0;

    private _error: any;

    constructor(private _iterator: Iterator<TElement>) {
    }

    *[Symbol.iterator](): Iterator<TElement> {
        let index = 0;
        for (;;) {
            if (index < this._bufferSize) {
                yield this._buffer[index];
            } else {
                if (this._iterator != null) {
                    let result: IteratorResult<TElement>;
                    try {
                        result = this._iterator.next();
                    } catch (e) {
                        this._error = e;
                        throw e;
                    }
                    if (result.done) {
                        this._iterator = null;
                        break;
                    }
                    this._bufferSize = this._buffer.push(result.value);
                    yield result.value;
                } else {
                    if (this._error) throw this._error;
                    break;
                }
            }
            index++;
        }
    }
}

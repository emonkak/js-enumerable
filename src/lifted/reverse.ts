import IEnumerable from '../IEnumerable';
import reverseFn from '../reverse';

export default function reverse<TSource>(this: IEnumerable<TSource>): IEnumerable<TSource> {
    return this.lift<TSource>(reverseFn.call(this));
}

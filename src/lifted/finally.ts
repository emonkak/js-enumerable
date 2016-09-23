import IEnumerable from '../IEnumerable';
import finallyFn from '../finally';

export default function _finally<TSource>(this: IEnumerable<TSource>, finallyAction: () => void): IEnumerable<TSource> {
    return this.lift<TSource>(finallyFn.call(this, finallyAction));
}

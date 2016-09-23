import IEnumerable from '../IEnumerable';
import whileFn from '../while';

export default function _while<TSource>(this: IEnumerable<TSource>, condition: () => boolean): IEnumerable<TSource> {
    return this.lift<TSource>(whileFn.call(this, condition));
}

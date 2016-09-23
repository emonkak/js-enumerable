import IEnumerable from '../IEnumerable';
import doWhileFn from '../doWhile';

export default function doWhile<TSource>(this: IEnumerable<TSource>, condition: () => boolean): IEnumerable<TSource> {
    return this.lift<TSource>(doWhileFn.call(this, condition));
}

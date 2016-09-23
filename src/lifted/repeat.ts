import IEnumerable from '../IEnumerable';
import repeatFn from '../repeat';

export default function repeat<TSource>(this: IEnumerable<TSource>, count?: number): IEnumerable<TSource> {
    return this.lift<TSource>(repeatFn.call(this, count));
}

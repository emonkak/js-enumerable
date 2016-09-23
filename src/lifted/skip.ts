import IEnumerable from '../IEnumerable';
import skipFn from '../skip';

export default function skip<TSource>(this: IEnumerable<TSource>, count: number): IEnumerable<TSource> {
    return this.lift<TSource>(skipFn.call(this, count));
}

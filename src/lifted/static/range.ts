import staticRangeFn from '../../static/range';
import { Enumerable } from '../../Enumerable';

export default function staticRange(start: number, count: number): Enumerable<number> {
    return new Enumerable(staticRangeFn(start, count));
}

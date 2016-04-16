import { noElements } from './internal/errors';

export default function average<TSource>(selector?: (element: TSource) => number): number {
    if (selector == null) selector = (x) => x as any;
    let sum = 0;
    let count = 0;
    for (const element of this as Iterable<TSource>) {
        sum += selector(element);
        count++;
    }
    if (count === 0) throw noElements();
    return sum / count;
}

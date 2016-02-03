import RepeatIterator from '../RepeatIterator'

export default function repeact<TSource>(element: TSource, count: number): Iterable<TSource> {
    return new RepeatIterator(element, count)
}

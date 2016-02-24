export default function _return<TSource>(element: TSource): Iterable<TSource> {
    return [element]
}

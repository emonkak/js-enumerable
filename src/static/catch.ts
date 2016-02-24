export default function* _catch<TSource>(...sources: Iterable<TSource>[]): Iterable<TSource> {
    let error: any
    for (const source of sources) {
        error = null
        try {
            yield* source
        } catch (e) {
            error = e
        }
        if (error == null) break
    }
    if (error != null) throw error
}

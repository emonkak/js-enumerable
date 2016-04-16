export default function* retry<TSource>(retryCount?: number): Iterable<TSource> {
    if (retryCount == null) retryCount = Infinity;
    let error: any;
    while (retryCount-- > 0) {
        error = null;
        try {
            yield* this;
        } catch (e) {
            error = e;
        }
        if (error == null) break;
    }
    if (error != null) throw error;
}

import { argumentOutOfRange } from './internal/errors'

export default function* buffer<TSource>(count: number, skip?: number): Iterable<TSource[]> {
    if (skip == null) skip = count
    if (count <= 0) throw argumentOutOfRange('count')
    if (skip <= 0) throw argumentOutOfRange('skip')

    let buffer: TSource[] = []
    let pushed = 0
    let skipped = 0

    for (const element of this as Iterable<TSource>) {
        if (pushed < count) {
            pushed = buffer.push(element)
        } else {
            if (skipped >= skip) {
                yield buffer
                buffer = buffer.slice(skip)
                pushed = buffer.push(element)
                skipped = 0
            }
        }
        skipped++
    }

    if (pushed > 0) {
        yield buffer
    }
}

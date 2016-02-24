import Partition from './Partition'
import { noElements } from './errors'

export default class EmptyPartition<TElement> extends Partition<TElement> implements Iterator<TElement> {
    constructor() {
        super()
    }

    [Symbol.iterator](): Iterator<TElement> {
        return this
    }

    next(): IteratorResult<TElement> {
        return { done: true }
    }

    skip(count: number): Partition<TElement> {
        return this
    }

    take(count: number): Partition<TElement> {
        return this
    }

    first(): TElement {
        throw noElements()
    }

    firstOrDefault(defaultValue?: TElement): TElement {
        return defaultValue
    }

    last(): TElement {
        throw noElements()
    }

    lastOrDefault(defaultValue?: TElement): TElement {
        return defaultValue
    }

    elementAt(index: number): TElement {
        throw noElements()
    }

    elementAtOrDefault(index: number, defaultValue?: TElement): TElement {
        return defaultValue
    }
}

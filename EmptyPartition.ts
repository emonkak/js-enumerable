import Partition from './Partition'

export default class EmptyPartition<TElement> extends Partition<TElement> {
    constructor() {
        super()
    }

    [Symbol.iterator](): Iterator<TElement> {
        return {
            next() {
                return { done: true }
            }
        }
    }

    skip(count: number): Partition<TElement> {
        return this
    }

    take(count: number): Partition<TElement> {
        return this
    }

    first(): TElement {
        throw new Error('Sequence contains no elements.')
    }

    firstOrDefault(): TElement {
        return null
    }

    last(): TElement {
        throw new Error('Sequence contains no elements.')
    }

    lastOrDefault(): TElement {
        return null
    }

    elementAt(index: number): TElement {
        throw new Error('Sequence contains no elements.')
    }

    elementAtOrDefault(index: number): TElement {
        return null
    }
}

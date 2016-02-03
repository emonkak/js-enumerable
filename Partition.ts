abstract class Partition<TElement> implements Iterable<TElement> {
    abstract [Symbol.iterator](): Iterator<TElement>

    abstract skip(count: number): Partition<TElement>

    abstract take(count: number): Partition<TElement>

    abstract elementAt(index: number): TElement

    abstract elementAtOrDefault(index: number): TElement

    abstract first(): TElement

    abstract firstOrDefault(): TElement

    abstract last(): TElement

    abstract lastOrDefault(): TElement
}

export default Partition

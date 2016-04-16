abstract class Partition<TElement> implements Iterable<TElement> {
    abstract [Symbol.iterator](): Iterator<TElement>;

    abstract skip(count: number): Partition<TElement>;

    abstract take(count: number): Partition<TElement>;

    abstract elementAt(index: number): TElement;

    abstract elementAtOrDefault(index: number, defaultValue?: TElement): TElement;

    abstract first(): TElement;

    abstract firstOrDefault(defaultValue?: TElement): TElement;

    abstract last(): TElement;

    abstract lastOrDefault(defaultValue?: TElement): TElement;
}

export default Partition;

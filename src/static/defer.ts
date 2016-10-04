export default function defer<TSource>(iterableFactory: () => Iterable<TSource>): Iterable<TSource> {
    return {
        [Symbol.iterator]() {
            return iterableFactory()[Symbol.iterator]();
        }
    };
}

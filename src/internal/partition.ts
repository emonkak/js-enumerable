export const partitionSymbol = Symbol();

export function isPartition<T>(source: Iterable<T>): source is IPartition<T> {
    return typeof (source as any)[partitionSymbol] === 'function' &&
        (source as any)[partitionSymbol]();
}

export interface IPartition<TElement> extends Iterable<TElement> {
    [partitionSymbol](): boolean;

    skip(count: number): Iterable<TElement>;

    take(count: number): Iterable<TElement>;

    elementAt(index: number): TElement;

    elementAtOrDefault(index: number): TElement | null;
    elementAtOrDefault(index: number, defaultValue: TElement): TElement;

    first(): TElement;

    firstOrDefault(): TElement | null;
    firstOrDefault(predicate: null, defaultValue: TElement): TElement;

    last(): TElement;

    lastOrDefault(): TElement | null;
    lastOrDefault(predicate: null, defaultValue: TElement): TElement;
}

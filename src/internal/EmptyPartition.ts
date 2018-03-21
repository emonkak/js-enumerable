import { IPartition, partitionSymbol } from './partition';
import { noElements } from './errors';

export default class EmptyPartition<TElement>  implements IPartition<TElement>, Iterator<TElement> {
    [Symbol.iterator](): Iterator<TElement> {
        return this;
    }

    [partitionSymbol](): boolean {
        return true;
    }

    next(): IteratorResult<TElement> {
        return { done: true, value: null as any };
    }

    skip(count: number): IPartition<TElement> {
        return this;
    }

    take(count: number): IPartition<TElement> {
        return this;
    }

    elementAt(index: number): TElement {
        throw noElements();
    }

    elementAtOrDefault(index: number): TElement | null;
    elementAtOrDefault(index: number, defaultValue: TElement): TElement;
    elementAtOrDefault(index: number, defaultValue: TElement | null = null): TElement | null {
        return defaultValue;
    }

    first(): TElement {
        throw noElements();
    }

    firstOrDefault(): TElement | null;
    firstOrDefault(predicate: null, defaultValue: TElement): TElement;
    firstOrDefault(predicate?: null, defaultValue: TElement | null = null): TElement | null {
        return defaultValue;
    }

    last(): TElement {
        throw noElements();
    }

    lastOrDefault(): TElement | null;
    lastOrDefault(predicate: null, defaultValue: TElement): TElement;
    lastOrDefault(predicate?: null, defaultValue: TElement | null = null): TElement | null {
        return defaultValue;
    }
}

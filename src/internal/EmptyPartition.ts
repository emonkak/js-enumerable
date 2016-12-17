import Partition from './Partition';
import { noElements } from './errors';

export default class EmptyPartition<TElement> extends Partition<TElement> implements Iterator<TElement> {
    constructor() {
        super();
    }

    [Symbol.iterator](): Iterator<TElement> {
        return this;
    }

    next(): IteratorResult<TElement> {
        return { done: true, value: null as any };
    }

    skip(count: number): Partition<TElement> {
        return this;
    }

    take(count: number): Partition<TElement> {
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
    firstOrDefault(defaultValue: TElement): TElement;
    firstOrDefault(defaultValue: TElement | null = null): TElement | null {
        return defaultValue;
    }

    last(): TElement {
        throw noElements();
    }

    lastOrDefault(): TElement | null;
    lastOrDefault(defaultValue: TElement): TElement;
    lastOrDefault(defaultValue: TElement | null = null): TElement | null {
        return defaultValue;
    }
}

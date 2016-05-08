import ILiftable from './internal/ILiftable';
import _catch from './static/catch';
import _if from './static/if';
import _return from './static/return';
import concat from './static/concat';
import defer from './static/defer';
import generate from './static/generate';
import range from './static/range';
import repeat from './static/repeat';
import zip from './static/zip';

export default class Enumerable<TSource> implements ILiftable<TSource> {
    static catch<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
        return new Enumerable(_catch(...sources));
    }

    static concat<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
        return new Enumerable(concat(...sources));
    }

    static defer<TSource>(iterableFactory: () => Iterable<TSource>): Enumerable<TSource> {
        return new Enumerable(defer(iterableFactory))
    }

    static generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult): Enumerable<TResult> {
        return new Enumerable(generate(initialState, condition, iterate, resultSelector));
    }

    static if<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(_if(condition, thenSource, elseSource));
    }

    static range(start: number, count: number): Enumerable<number> {
        return new Enumerable(range(start, count));
    }

    static repeat<TSource>(element: TSource, count?: number): Enumerable<TSource> {
        return new Enumerable(repeat(element, count));
    }

    static return<TSource>(element: TSource): Enumerable<TSource> {
        return new Enumerable(_return(element));
    }

    static zip<TFirst, TSecond, TResult>(first: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
        return new Enumerable(zip(first, second, resultSelector));
    }

    constructor(private _source: Iterable<TSource>) {
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }

    // Mixins:
    aggregate: <TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate) => TAccumulate;
    all: (predicate?: (element: TSource) => boolean) => boolean;
    any: (predicate?: (element: TSource) => boolean) => boolean;
    average: (selector?: (element: TSource) => number) => number;
    buffer: (count: number, skip?: number) => ILiftable<TSource[]>;
    catch: <TException>(handler: (exception: TException) => Iterable<TSource>) => ILiftable<TSource>;
    concat: (...sources: Iterable<TSource>[]) => ILiftable<TSource>;
    count: (predicate?: (item: TSource) => boolean) => number;
    defaultIfEmpty: (defaultValue: TSource) => ILiftable<TSource>;
    distinct: {
        (): ILiftable<TSource>;
        <TKey>(keySelector?: (element: TSource) => Iterable<TKey>): ILiftable<TSource>;
    };
    distinctUntilChanged: {
        (): ILiftable<TSource>;
        <TSource, TKey>(keySelector?: (element: TSource) => TKey): ILiftable<TSource>;
    };
    do: (action: (element: TSource) => void) => ILiftable<TSource>;
    doWhile: (condition: () => boolean) => ILiftable<TSource>;
    elementAt: (index: number) => TSource;
    elementAtOrDefault: (index: number, defaultValue?: TSource) => TSource;
    except: (second: Iterable<TSource>) => ILiftable<TSource>;
    finally: (finallyAction: () => void) => ILiftable<TSource>;
    first: (predicate?: (element: TSource) => boolean) => TSource;
    firstOrDefault: (predicate?: (element: TSource) => boolean, defaultValue?: TSource) => TSource;
    forEach: (action: (element: TSource) => void) => void;
    groupBy: {
        <TKey>(keySelector: (element: TSource) => TKey): ILiftable<[TKey, TSource]>;
        <TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): ILiftable<[TKey, TElement]>;
        <TKey, TElement, TResult>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement, resultSelector?: (key: TKey, elements: TElement[]) => TResult): ILiftable<TResult>;
    };
    groupJoin: <TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TSource) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TSource, inner: TInner[]) => TResult) => ILiftable<TResult>;
    ignoreElements: () => ILiftable<TSource>;
    intersect: (second: Iterable<TSource>) => ILiftable<TSource>;
    isEmpty: () => boolean;
    join: <TInner, TKey, TResult>(inner: Iterable<TInner>, outerKeySelector: (element: TSource) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TSource, inner: TInner) => TResult) => ILiftable<TResult>;
    last: (predicate?: (value: TSource) => boolean) => TSource;
    lastOrDefault: (predicate?: (value: TSource) => boolean, defaultValue?: TSource) => TSource;
    max: (selector: (element: TSource) => number) => number;
    maxBy: <TKey>(keySelector: (element: TSource) => TKey) => TSource[];
    memoize: () => ILiftable<TSource>;
    min: (selector: (element: TSource) => number) => number;
    minBy: <TKey>(keySelector: (element: TSource) => TKey) => TSource[];
    onErrorResumeNext: (...sources: Iterable<TSource>[]) => ILiftable<TSource>;
    orderBy: {
        (): ILiftable<TSource>;
        <TKey>(keySelector?: (value: TSource) => TKey): ILiftable<TSource>;
    };
    orderByDescending: {
        (): ILiftable<TSource>;
        <TKey>(keySelector?: (value: TSource) => TKey): ILiftable<TSource>;
    };
    repeat: (count?: number) => ILiftable<TSource>;
    retry: (retryCount?: number) => ILiftable<TSource>;
    reverse: () => ILiftable<TSource>;
    scan: <TAccumulate>(seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate) => ILiftable<TAccumulate>;
    select: <TResult>(selector: (element: TSource) => TResult) => ILiftable<TResult>;
    selectMany: <TResult>(collectionSelector: (element: TSource) => ILiftable<TResult>) => ILiftable<TResult>;
    single: (predicate?: (element: TSource) => boolean) => TSource;
    singleOrDefault: (predicate?: (element: TSource) => boolean, defaultValue?: TSource) => TSource;
    skip: (count: number) => ILiftable<TSource>;
    skipLast: (count: number) => ILiftable<TSource>;
    skipWhile: (predicate: (element: TSource) => boolean) => ILiftable<TSource>;
    startWith: (...elements: TSource[]) => ILiftable<TSource>;
    sum: (selector?: (element: TSource) => number) => number;
    take: (count: number) => ILiftable<TSource>;
    takeLast: (count: number) => ILiftable<TSource>;
    takeWhile: (predicate: (element: TSource) => boolean) => ILiftable<TSource>;
    toArray: () => TSource[];
    toLookup: {
        <TKey>(keySelector: (element: TSource) => TKey): Map<TKey, TSource[]>;
        <TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement[]>;
    };
    toMap: {
        <TKey>(keySelector: (element: TSource) => TKey): Map<TKey, TSource>;
        <TKey, TElement>(keySelector: (element: TSource) => TKey, elementSelector?: (element: TSource) => TElement): Map<TKey, TElement>;
    };
    union: (second: Iterable<TSource>) => ILiftable<TSource>;
    where: (predicate: (item: TSource) => boolean) => ILiftable<TSource>;
    while: (condition: () => boolean) => ILiftable<TSource>;
    zip: <TSecond, TResult>(second: Iterable<TSecond>, resultSelector: (first: TSource, second: TSecond) => TResult) => ILiftable<TResult>;
}

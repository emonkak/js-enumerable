# @emonkak/enumerable

[![Build Status](https://travis-ci.org/emonkak/js-enumerable.svg?branch=master)](https://travis-ci.org/emonkak/js-enumerable)
[![Coverage Status](https://coveralls.io/repos/emonkak/js-enumerable/badge.svg)](https://coveralls.io/r/emonkak/js-enumerable)

This library provides the individual methods of LINQ as a module.

## Example

```javascript
import select from '@emonkak/enumerable/select';

Array.from(select.call([1, 2, 3], (x) => x * 2));  // => [2, 4, 6]
```

You can use method chain by using [This-Binding Syntax](https://github.com/tc39/proposal-bind-operator).

```javascript
import select from '@emonkak/enumerable/select';
import where from '@emonkak/enumerable/where';
import toArray from '@emonkak/enumerable/toArray';

[1, 2, 3]
    ::where((x) => x % 2 === 0)
    ::select((x) => x * 2)
    ::toArray();  // => [4]
```

But ECMAScript This-Binding Syntax is still in a proposal yet.
You can use the extension modules instead of ECMAScript This-Binding Syntax.
The extension modules add methods to `Enumerable` class.

```javascript
import Enumerable from '@emonkak/enumerable';

import '@emonkak/enumerable/extensions/select';
import '@emonkak/enumerable/extensions/where';
import '@emonkak/enumerable/extensions/toArray';

new Enumerable([1, 2, 3])
    .where((x) => x % 2 === 0)
    .select((x) => x * 2)
    .toArray();  // => [4]
```

## API

- `aggregate<TSource, TAccumulate>(this: Iterable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): TAccumulate`
- `all<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): boolean`
- `any<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): boolean`
- `average<TSource>(this: Iterable<TSource>, selector?: (element: TSource) => number): number`
- `buffer<TSource>(this: Iterable<TSource>, count: number, skip?: number): Iterable<TSource[]>`
- `catch<TSource, TException>(this: Iterable<TSource>, handler: (exception: TException) => Iterable<TSource>): Iterable<TSource>`
- `concat<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource>`
- `count<TSource>(this: Iterable<TSource>, predicate?: (item: TSource) => boolean): number`
- `defaultIfEmpty<TSource>(this: Iterable<TSource>, defaultValue: TSource): Iterable<TSource>`
- `distinct<TSource>(this: Iterable<TSource>): Iterable<TSource>`
- `distinctUntilChanged<TSource>(this: Iterable<TSource>): Iterable<TSource>`
- `do<TSource>(this: Iterable<TSource>, action: (element: TSource) => void): Iterable<TSource>`
- `doWhile<TSource>(this: Iterable<TSource>, condition: () => boolean): Iterable<TSource>`
- `elementAt<TSource>(this: Iterable<TSource>, index: number): TSource`
- `elementAtOrDefault<TSource>(this: Iterable<TSource>, index: number): TSource | null`
- `elementAtOrDefault<TSource>(this: Iterable<TSource>, index: number, defaultValue: TSource): TSource`
- `except<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource>`
- `finally<TSource>(this: Iterable<TSource>, finallyAction: () => void): Iterable<TSource>`
- `first<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): TSource`
- `firstOrDefault<TSource>(this: Iterable<TSource>): TSource | null`
- `firstOrDefault<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): TSource | null`
- `firstOrDefault<TSource>(this: Iterable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource`
- `forEach<TSource>(this: Iterable<TSource>, action: (element: TSource) => void): void`
- `groupBy<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): Iterable<[TKey, TSource]>`
- `groupBy<TSource, TKey, TElement>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey, elementSelector: (element: TSource) => TElement): Iterable<[TKey, TElement]>`
- `groupJoin<TOuter, TInner, TKey, TResult>(this: Iterable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner[]) => TResult): Iterable<TResult>`
- `ignoreElements<TSource>(this: Iterable<TSource>): Iterable<TSource>`
- `intersect<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource>`
- `isEmpty<TSource>(this: Iterable<TSource>): boolean`
- `join<TOuter, TInner, TKey, TResult>(this: Iterable<TOuter>, inner: Iterable<TInner>, outerKeySelector: (element: TOuter) => TKey, innerKeySelector: (element: TInner) => TKey, resultSelector: (outer: TOuter, inner: TInner) => TResult): Iterable<TResult>`
- `last<TSource>(this: Iterable<TSource>, predicate?: (value: TSource) => boolean): TSource`
- `lastOrDefault<TSource>(this: Iterable<TSource>): TSource | null`
- `lastOrDefault<TSource>(this: Iterable<TSource>, predicate: (value: TSource) => boolean): TSource | null`
- `lastOrDefault<TSource>(this: Iterable<TSource>, predicate: ((value: TSource) => boolean) | null, defaultValue: TSource): TSource`
- `max<TSource>(this: Iterable<TSource>, selector?: (element: TSource) => number): number`
- `maxBy<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): TSource[]`
- `memoize<TSource>(this: Iterable<TSource>): Iterable<TSource>`
- `min<TSource>(this: Iterable<TSource>, selector?: (element: TSource) => number): number`
- `minBy<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): TSource[]`
- `onErrorResumeNext<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource>`
- `orderBy<TSource>(this: Iterable<TSource>): OrderedEnumerable<TSource, TSource>`
- `orderByDescending<TSource>(this: Iterable<TSource>): OrderedEnumerable<TSource, TSource>`
- `repeat<TSource>(this: Iterable<TSource>, count?: number): Iterable<TSource>`
- `retry<TSource>(this: Iterable<TSource>, retryCount?: number): Iterable<TSource>`
- `reverse<TSource>(this: Iterable<TSource>): Iterable<TSource>`
- `scan<TSource, TAccumulate>(this: Iterable<TSource>, seed: TAccumulate, func: (result: TAccumulate, element: TSource) => TAccumulate): Iterable<TAccumulate>`
- `select<TSource, TResult>(this: Iterable<TSource>, selector: (element: TSource) => TResult): Iterable<TResult>`
- `selectMany<TSource, TResult>(this: Iterable<TSource>, collectionSelector: (element: TSource) => Iterable<TResult>): Iterable<TResult>`
- `single<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): TSource`
- `singleOrDefault<TSource>(this: Iterable<TSource>): TSource | null`
- `singleOrDefault<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): TSource | null`
- `singleOrDefault<TSource>(this: Iterable<TSource>, predicate: ((element: TSource) => boolean) | null, defaultValue: TSource): TSource`
- `skip<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource>`
- `skipLast<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource>`
- `skipWhile<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): Iterable<TSource>`
- `startWith<TSource>(this: Iterable<TSource>, ...elements: TSource[]): Iterable<TSource>`
- `sum<TSource>(this: Iterable<TSource>, selector?: (element: TSource) => number): number`
- `take<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource>`
- `takeLast<TSource>(this: Iterable<TSource>, count: number): Iterable<TSource>`
- `takeWhile<TSource>(this: Iterable<TSource>, predicate: (element: TSource) => boolean): Iterable<TSource>`
- `toArray<TSource>(this: Iterable<TSource>): TSource[]`
- `toDictionary<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): Map<TKey, TSource>`
- `toLookup<TSource, TKey>(this: Iterable<TSource>, keySelector: (element: TSource) => TKey): Map<TKey, TSource[]>`
- `toObject<TSource>(this: Iterable<TSource>, keySelector: (element: TSource) => string): { [key: string]: TSource; }`
- `union<TSource>(this: Iterable<TSource>, second: Iterable<TSource>): Iterable<TSource>`
- `where<TSource>(this: Iterable<TSource>, predicate: (item: TSource) => boolean): Iterable<TSource>`
- `while<TSource>(this: Iterable<TSource>, condition: () => boolean): Iterable<TSource>`
- `zip<TFirst, TSecond, TResult>(this: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Iterable<TResult>`

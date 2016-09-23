import IEnumerable from './IEnumerable';
import aggregate from './aggregate';
import all from './all';
import any from './any';
import average from './average';
import buffer from './lifted/buffer';
import _catch from './lifted/catch';
import concat from './lifted/concat';
import count from './count';
import defaultIfEmpty from './lifted/defaultIfEmpty';
import distinct from './lifted/distinct';
import distinctUntilChanged from './lifted/distinctUntilChanged';
import _do from './lifted/do';
import doWhile from './lifted/doWhile';
import elementAt from './elementAt';
import elementAtOrDefault from './elementAtOrDefault';
import except from './lifted/except';
import _finally from './lifted/finally';
import first from './first';
import firstOrDefault from './firstOrDefault';
import forEach from './forEach';
import groupBy from './lifted/groupBy';
import groupJoin from './lifted/groupJoin';
import ignoreElements from './lifted/ignoreElements';
import intersect from './lifted/intersect';
import isEmpty from './isEmpty';
import join from './lifted/join';
import last from './last';
import lastOrDefault from './lastOrDefault';
import max from './max';
import maxBy from './maxBy';
import memoize from './lifted/memoize';
import min from './min';
import minBy from './minBy';
import onErrorResumeNext from './lifted/onErrorResumeNext';
import orderBy from './lifted/orderBy';
import orderByDescending from './lifted/orderByDescending';
import repeat from './lifted/repeat';
import retry from './lifted/retry';
import reverse from './lifted/reverse';
import scan from './lifted/scan';
import select from './lifted/select';
import selectMany from './lifted/selectMany';
import single from './single';
import singleOrDefault from './singleOrDefault';
import skip from './lifted/skip';
import skipLast from './lifted/skipLast';
import skipWhile from './lifted/skipWhile';
import startWith from './lifted/startWith';
import staticCatch from './static/catch';
import staticConcat from './static/concat';
import staticDefer from './static/defer';
import staticGenerate from './static/generate';
import staticIf from './static/if';
import staticRange from './static/range';
import staticRepeat from './static/repeat';
import staticReturn from './static/return';
import staticZip from './static/zip';
import sum from './sum';
import take from './lifted/take';
import takeLast from './lifted/takeLast';
import takeWhile from './lifted/takeWhile';
import toArray from './toArray';
import toLookup from './toLookup';
import toMap from './toMap';
import union from './lifted/union';
import where from './lifted/where';
import _while from './lifted/while';
import zip from './lifted/zip';

export default class Enumerable<TSource> implements IEnumerable<TSource> {
    static catch<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
        return new Enumerable(staticCatch(...sources));
    }

    static concat<TSource>(...sources: Iterable<TSource>[]): Enumerable<TSource> {
        return new Enumerable(staticConcat(...sources));
    }

    static defer<TSource>(iterableFactory: () => Iterable<TSource>): Enumerable<TSource> {
        return new Enumerable(staticDefer(iterableFactory));
    }

    static generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult): Enumerable<TResult> {
        return new Enumerable(staticGenerate(initialState, condition, iterate, resultSelector));
    }

    static if<TResult>(condition: () => boolean, thenSource: Iterable<TResult>, elseSource: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(staticIf(condition, thenSource, elseSource));
    }

    static range(start: number, count: number): Enumerable<number> {
        return new Enumerable(staticRange(start, count));
    }

    static repeat<TSource>(element: TSource, count?: number): Enumerable<TSource> {
        return new Enumerable(staticRepeat(element, count));
    }

    static return<TSource>(element: TSource): Enumerable<TSource> {
        return new Enumerable(staticReturn(element));
    }

    static zip<TFirst, TSecond, TResult>(first: Iterable<TFirst>, second: Iterable<TSecond>, resultSelector: (first: TFirst, second: TSecond) => TResult): Enumerable<TResult> {
        return new Enumerable(staticZip(first, second, resultSelector));
    }

    constructor(private _source: Iterable<TSource>) {
    }

    [Symbol.iterator](): Iterator<TSource> {
        return this._source[Symbol.iterator]();
    }

    lift<TResult>(source: Iterable<TResult>): Enumerable<TResult> {
        return new Enumerable(source);
    }

    readonly aggregate = aggregate;
    readonly all = all;
    readonly any = any;
    readonly average = average;
    readonly buffer = buffer;
    readonly catch = _catch;
    readonly concat = concat;
    readonly count = count;
    readonly defaultIfEmpty = defaultIfEmpty;
    readonly distinct = distinct;
    readonly distinctUntilChanged = distinctUntilChanged;
    readonly do = _do;
    readonly doWhile = doWhile;
    readonly elementAt = elementAt;
    readonly elementAtOrDefault = elementAtOrDefault;
    readonly except = except;
    readonly finally = _finally;
    readonly first = first;
    readonly firstOrDefault = firstOrDefault;
    readonly forEach = forEach;
    readonly groupBy = groupBy;
    readonly groupJoin = groupJoin;
    readonly ignoreElements = ignoreElements;
    readonly intersect = intersect;
    readonly isEmpty = isEmpty;
    readonly join = join;
    readonly last = last;
    readonly lastOrDefault = lastOrDefault;
    readonly max = max;
    readonly maxBy = maxBy;
    readonly memoize = memoize;
    readonly min = min;
    readonly minBy = minBy;
    readonly onErrorResumeNext = onErrorResumeNext;
    readonly orderBy = orderBy;
    readonly orderByDescending = orderByDescending;
    readonly repeat = repeat;
    readonly retry = retry;
    readonly reverse = reverse;
    readonly scan = scan;
    readonly select = select;
    readonly selectMany = selectMany;
    readonly single = single;
    readonly singleOrDefault = singleOrDefault;
    readonly skip = skip;
    readonly skipLast = skipLast;
    readonly skipWhile = skipWhile;
    readonly startWith = startWith;
    readonly sum = sum;
    readonly take = take;
    readonly takeLast = takeLast;
    readonly takeWhile = takeWhile;
    readonly toArray = toArray;
    readonly toLookup = toLookup;
    readonly toMap = toMap;
    readonly union = union;
    readonly where = where;
    readonly while = _while;
    readonly zip = zip;
}

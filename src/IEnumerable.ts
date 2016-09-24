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
import sum from './sum';
import take from './lifted/take';
import takeLast from './lifted/takeLast';
import takeWhile from './lifted/takeWhile';
import toArray from './toArray';
import toDictionary from './toDictionary';
import toLookup from './toLookup';
import union from './lifted/union';
import where from './lifted/where';
import _while from './lifted/while';
import zip from './lifted/zip';

interface IEnumerable<TSource> extends Iterable<TSource> {
    lift<TResult>(source: Iterable<TResult>): IEnumerable<TResult>;
    readonly aggregate: typeof aggregate;
    readonly all: typeof all;
    readonly any: typeof any;
    readonly average: typeof average;
    readonly buffer: typeof buffer;
    readonly catch: typeof _catch;
    readonly concat: typeof concat;
    readonly count: typeof count;
    readonly defaultIfEmpty: typeof defaultIfEmpty;
    readonly distinct: typeof distinct;
    readonly distinctUntilChanged: typeof distinctUntilChanged;
    readonly do: typeof _do;
    readonly doWhile: typeof doWhile;
    readonly elementAt: typeof elementAt;
    readonly elementAtOrDefault: typeof elementAtOrDefault;
    readonly except: typeof except;
    readonly finally: typeof _finally;
    readonly first: typeof first;
    readonly firstOrDefault: typeof firstOrDefault;
    readonly forEach: typeof forEach;
    readonly groupBy: typeof groupBy;
    readonly groupJoin: typeof groupJoin;
    readonly ignoreElements: typeof ignoreElements;
    readonly intersect: typeof intersect;
    readonly isEmpty: typeof isEmpty;
    readonly join: typeof join;
    readonly last: typeof last;
    readonly lastOrDefault: typeof lastOrDefault;
    readonly max: typeof max;
    readonly maxBy: typeof maxBy;
    readonly memoize: typeof memoize;
    readonly min: typeof min;
    readonly minBy: typeof minBy;
    readonly onErrorResumeNext: typeof onErrorResumeNext;
    readonly orderBy: typeof orderBy;
    readonly orderByDescending: typeof orderByDescending;
    readonly repeat: typeof repeat;
    readonly retry: typeof retry;
    readonly reverse: typeof reverse;
    readonly scan: typeof scan;
    readonly select: typeof select;
    readonly selectMany: typeof selectMany;
    readonly single: typeof single;
    readonly singleOrDefault: typeof singleOrDefault;
    readonly skip: typeof skip;
    readonly skipLast: typeof skipLast;
    readonly skipWhile: typeof skipWhile;
    readonly startWith: typeof startWith;
    readonly sum: typeof sum;
    readonly take: typeof take;
    readonly takeLast: typeof takeLast;
    readonly takeWhile: typeof takeWhile;
    readonly toArray: typeof toArray;
    readonly toDictionary: typeof toDictionary;
    readonly toLookup: typeof toLookup;
    readonly union: typeof union;
    readonly where: typeof where;
    readonly while: typeof _while;
    readonly zip: typeof zip;
}

export default IEnumerable;

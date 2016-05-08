interface ILiftable<TSource> extends Iterable<TSource> {
    lift<TResult>(source: Iterable<TResult>): ILiftable<TResult>;
}

export default ILiftable;

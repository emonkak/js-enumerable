export default function toObject<TSource>(this: Iterable<TSource>, keySelector: (element: TSource) => string): { [key: string]: TSource };
export default function toObject<TSource, TElement>(this: Iterable<TSource>, keySelector: (element: TSource) => string, elementSelector: (element: TSource) => TElement): { [key: string]: TElement };
export default function toObject<TSource, TElement>(this: Iterable<TSource>, keySelector: (element: TSource) => string, elementSelector?: (element: TSource) => TElement): { [key: string]: TElement } {
    if (elementSelector == null) {
        elementSelector = x => x as any;
    }

    const object: { [key: string]: TElement } = {};

    for (const element of this) {
        object[keySelector(element)] = elementSelector(element);
    }

    return object;
}


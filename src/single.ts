import Partition from './internal/Partition';
import { moreThanOneMatch, noElements } from './internal/errors';

export default function single<TSource>(this: Iterable<TSource>, predicate?: (element: TSource) => boolean): TSource {
    if (predicate) {
        let value: TSource;
        let hasValue = false;

        for (const element of this) {
            if (predicate(element)) {
                if (hasValue) throw moreThanOneMatch();
                value = element;
                hasValue = true;
            }
        }

        if (hasValue) return value;
    } else {
        if (Array.isArray(this)) {
            switch ((this as any).length) {
            case 0:
                throw noElements();
            case 1:
                return (this as any)[0];
            default:
                throw moreThanOneMatch();
            }
        } else {
            let value: TSource;
            let hasValue = false;

            for (const element of this) {
                if (hasValue) throw moreThanOneMatch();
                value = element;
                hasValue = true;
            }

            if (hasValue) return value;
        }
    }
    throw noElements();
}

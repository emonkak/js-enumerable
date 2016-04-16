export function argumentOutOfRange(s: string): Error {
    return new RangeError(`Index was out of range must be nonnegative and less than the size of the collection Parameter name: ${s}`);
}

export function moreThanOneMatch(): Error {
    return new Error('More than one match found.');
}

export function noElements(): Error {
    return new Error('Sequence contains no elements.');
}

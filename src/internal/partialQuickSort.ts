import pivotPosition from './pivotPosition';

export default function partialQuickSort<T>(array: Array<T>, comparer: (first: T, second: T) => number, left: number, right: number, minIndex: number, maxIndex: number): void {
    if (left < right) {
        const pivotIndex = left + ((right - left) >> 1);
        const pivotNewIndex = pivotPosition(array, comparer, left, right, pivotIndex);

        if (pivotNewIndex < left + minIndex) {
            partialQuickSort(array, comparer, pivotNewIndex + 1, right, minIndex, maxIndex);
        } else if (pivotNewIndex > right + maxIndex) {
            partialQuickSort(array, comparer, left, pivotNewIndex - 1, minIndex, maxIndex);
        }
    }
}

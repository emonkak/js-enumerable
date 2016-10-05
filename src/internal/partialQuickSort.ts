export default function partialQuickSort<T>(array: Array<T>, comparer: (first: T, second: T) => number, left: number, right: number, minIndex: number, maxIndex: number): void {
    do {
        let i = left;
        let j = right;
        let x = array[i + ((j - i) >> 1)];
        do {
            while (i < array.length && comparer(x, array[i]) > 0) {
                i++;
            }

            while (j >= 0 && comparer(x, array[j]) < 0) {
                j--;
            }

            if (i > j) {
                break;
            }

            if (i < j) {
                const tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }

            i++;
            j--;
        } while (i <= j);

        if (minIndex >= i) {
            left = i + 1;
        } else if (maxIndex <= j) {
            right = j - 1;
        }

        if (j - left <= right - i) {
            if (left < j) {
                partialQuickSort(array, comparer, left, j, minIndex, maxIndex);
            }

            left = i;
        } else {
            if (i < right) {
                partialQuickSort(array, comparer, i, right, minIndex, maxIndex);
            }

            right = j;
        }
    } while (left < right);
}

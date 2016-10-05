export default function quickSelect<T>(array: Array<T>, comparer: (first: T, second: T) => number, left: number, right: number, index: number): T {
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

        if (i <= index) {
            left = i + 1;
        } else {
            right = j - 1;
        }

        if (j - left <= right - i) {
            if (left < j) {
                right = j;
            }

            left = i;
        } else {
            if (i < right) {
                left = i;
            }

            right = j;
        }
    } while (left < right);

    return array[index];
}

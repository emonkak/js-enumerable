import IComparer from '../IComparer'
import partition from './partition'

export default function quickSelect<T>(array: Array<T>, comparer: IComparer<T>, left: number, right: number, n: number): T {
    while (true) {
        if (left === right) return array[left]

        const pivotIndex = left + ((right - left) >> 1)
        const pivotNewIndex = partition(array, comparer, left, right, pivotIndex)

        if (pivotNewIndex === n) return array[n]

        if (pivotNewIndex > n) {
            right = pivotNewIndex - 1
        } else {
            left = pivotNewIndex + 1
        }
    }
}

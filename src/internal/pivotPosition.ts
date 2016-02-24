import IComparer from './IComparer'

export default function pivotPosition<T>(array: Array<T>, comparer: IComparer<T>, left: number, right: number, pivotIndex: number): number {
    const pivotValue = array[pivotIndex]

    swap(array, right, pivotIndex)

    let storeIndex = left

    for (let i = left; i < right; i++) {
        if (comparer(array[i], pivotValue) < 0) {
            swap(array, storeIndex, i)
            storeIndex++
        }
    }

    swap(array, right, storeIndex)

    return storeIndex
}

function swap<T>(array: T[], i: number, j: number): void {
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

const selectionSort = (arr: number[]): number[] => {
  let cursor = 0
  let times = 0
  while (times < arr.length) {
    for (let i = times + 1; i < arr.length; i++) {
      if (arr[cursor] > arr[i]) {
        cursor = i
      }
    }
    const current = arr[times]
    const select = arr[cursor]
    arr[cursor] = current
    arr[times] = select
    times++
    cursor = times
  }
  return arr
}

export default selectionSort

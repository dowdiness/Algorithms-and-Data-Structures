const bubbleSort = (arr: number[]): number[] => {
  let times = 0
  while (times < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const current = arr[i]
        const next = arr[i + 1]
        arr[i + 1] = current
        arr[i] = next
      }
    }
    times++
  }
  return arr
}

export default bubbleSort

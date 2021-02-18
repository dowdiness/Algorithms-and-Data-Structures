// https://ja.wikipedia.org/wiki/%E6%8C%BF%E5%85%A5%E3%82%BD%E3%83%BC%E3%83%88
const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      const current = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]
        j--
      }
      arr[j + 1] = current
    }
  }
  return arr
}

export default insertionSort

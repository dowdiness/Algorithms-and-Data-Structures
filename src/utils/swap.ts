// In-placeアルゴリズム 破壊的 https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0
const swap = (arr: number[], i: number, j: number): void => {
  const current = arr[i]
  const next = arr[j]
  arr[i] = next
  arr[j] = current
}

export default swap

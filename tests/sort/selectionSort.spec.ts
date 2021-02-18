import selectionSort from '../../src/sort/selectionSort'

describe('Selection Sort', function () {
  it('should sort', function () {
    expect(selectionSort([1, 4, 2, 3])).toEqual([1, 2, 3, 4])
    expect(selectionSort([102, 41, 2, 32])).toEqual([2, 32, 41, 102])
    expect(selectionSort([9, -1000, 2, 84])).toEqual([-1000, 2, 9, 84])
    expect(selectionSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48])).toEqual([2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50])
  })

  it('should return empty array if empty or one element array is passed', function () {
    expect(selectionSort([])).toEqual([])
    expect(selectionSort([1])).toEqual([1])
  })
})

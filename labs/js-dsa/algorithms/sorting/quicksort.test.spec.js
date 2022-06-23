const quicksort = require('../..').Sorting.quicksort;
const sortingTestsHelper = require('./sorting_tests_helper.test.spec.test.spec');

describe('QuickSort', () => {
  it('sorts the given array', () => {
    sortingTestsHelper.testSort(quicksort);
  });

  it('sorts the array with a specific comparison function', () => {
    sortingTestsHelper.testSortWithComparisonFn(quicksort);
  });
});

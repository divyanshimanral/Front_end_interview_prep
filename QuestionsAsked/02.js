// Finding Streaks
// TC: O(n) & SC O(1)

function findMaxStreaks(arr) {
    let maxPositiveStreak = 0;
    let maxNegativeStreak = 0;
    let currentPositiveStreak = 0;
    let currentNegativeStreak = 0;
  
    for (let number of arr) {
      if (number > 0) {
        currentPositiveStreak++;
        currentNegativeStreak = 0;
      } else if (number < 0) {
        currentNegativeStreak++;
        currentPositiveStreak = 0;
      } else {
        currentPositiveStreak = 0;
        currentNegativeStreak = 0;
      }
  
      maxPositiveStreak = Math.max(maxPositiveStreak, currentPositiveStreak);
      maxNegativeStreak = Math.max(maxNegativeStreak, currentNegativeStreak);
    }
  
    return {
      maxPositiveStreak: maxPositiveStreak,
      maxNegativeStreak: maxNegativeStreak,
    };
  }
  
  let intArray = [-1, -3, 2, 4, 9, -10, 24, -30, -33, -29, 1, 8, 19, 23];
  console.log(findMaxStreaks(intArray));




function hasTargetSum(array, target) {
  // Pseudocode:
  // 1. Create an empty set to store the seen numbers.
  // 2. loop through the array.
  // 3.Calculate the difference between the target and the current number each loop
  // 4. Check if the difference exists in the set. If it does, return true as we found a pair.
  // 5. If the difference doesn't exist in the set, add the current number to the set.
  // 6. If no pair is found after iterating through the entire array, return false.

  let seenNumbers = new Set();

  for (let num of array) {
    let difference = target - num;
    if (seenNumbers.has(difference)) {
      return true;
    } else {
      seenNumbers.add(num);
    }
  }

  return false;
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
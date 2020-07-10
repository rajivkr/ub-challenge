const findMissingNumber = (nums = []) => {
  if (nums.length === 1) return nums[0];
  const countObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (countObj[nums[i]]) {
      countObj[nums[i]] += 1;
      if (countObj[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    } else {
      countObj[nums[i]] = 1;
    }
  }
  return 0;
};

if (process.env.NODE_ENV !== 'test') {
  console.log(findMissingNumber([3, 2, 3]));
}

export default findMissingNumber;

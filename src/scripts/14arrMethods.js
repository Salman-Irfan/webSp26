const alpha = [`a`, `q`, `e`, `r`, `t`, `y`, `u`, `i`, `o`, `p`];
console.log(alpha);
alpha.sort();
console.log(alpha);

const nums = [1, 4, 11, 6, 32];
console.log(nums);
nums.sort();
console.log(nums);

nums.sort((a, b) => a - b);
console.log(nums);

const sqNums = nums.map((num) => {
    return (num * 2 + (12))
});
console.log(sqNums);

nums.forEach((num) => {
    console.log(num * 2 + (12));
});

const evens = nums.filter((num) => {
    return num % 2 === 0;
});
console.log(evens);

// sum of all nums
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);

// sum of all nums using reduce
const sum2 = nums.reduce((acc, num) => {
    return acc + num
}, 0);
console.log(sum2);

// includes
console.log(nums.includes(11)); // true
console.log(nums.includes(110)); // false

// indexOf
console.log(nums.indexOf(11)); // 3 
console.log(nums.indexOf(110)); // -1

// join
const words = [`hello`, `world`, `how`, `are`, `you`];
const strWords = words.join(` 123 `);
console.log(strWords);

// split
let str1 = `A quick brown fox jumpbs over the lazy dog`;
const arr1 = str1.split(`b`);
console.log(arr1);
// Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

// expected output 

// sumArray([1, 2, 3, 4, 5]); // Expected output: 15
// sumArray([10, 20, 30]); // Expected output: 60
// sumArray([-1, 0, 1]); // Expected output: 0



const sumArray = (array)=>{
let sum=0;

for(let i=0;i<array.length; i++){
    sum = sum+array[i];
}
return console.log(sum);
}

const datas = sumArray([-1, 0, 1])

// console.log("datas",datas)


const arr = [4,3,4,5,6,4,5,6,4,9,4,2,5,7];

function findSumOfConsecutiveNumbers(arr, target) {
    const arrayIteration = (arr.length - target) + 1;
    let maxSum = 0;

    for(let i=0; i<=arrayIteration; i++) {
        let tempSum = 0;

        for(let j=0; j<target; j++) {
            tempSum += arr[j];
        }
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}


const result = findSumOfConsecutiveNumbers(arr, 4);
console.log(result);
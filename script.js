

const arr = [2,3,5,2,4,6,7,4,2];

function findLargestSum(arr, target) {
    if(arr.length > 0) {
        const loopIteration = (arr.length - target) + 1;
    let maxSum = 0;
    for(let i=0; i <= loopIteration; i++) {
        let tempSum = 0;
        for(let j=0; j<target; j++) {
            tempSum += arr[i+j];
        }
        if(tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
    } else {
        return 'Array is empty';
    }
}


const result = findLargestSum(arr, 3);
console.log(result);

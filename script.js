
const arr  = [ -8, -5, -4, -2, -1, 0, 2, 3, 4, 5, 6 ];


function findSumZero (arr) {
    for(let i=0; i <arr.length; i++) {
        const firstNum = arr[i];

        for(let j=i; j <arr.length; j++) {
            const secondNum = arr[j];
            const sum = firstNum + secondNum;
            if(sum === 0) {
                return [i, j];
            }
        }
    }
    return [];
}


const result = findSumZero(arr);
console.log(result);
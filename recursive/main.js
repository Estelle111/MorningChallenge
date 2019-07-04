

/* let arr = [3, 6, 5, 1];
let sum = 0;

for(i=0; i<arr.length; i++) {
    sum += arr[i]; 
} */

let num = [6, 7, 5, 1];
let sum = 0;

function rec(arr) {
    if(arr.length > 0){
        sum += arr.pop();
        rec(arr);
    }
}

rec(num) 

console.log(sum) // 15

/* rec = arr => {
    arr.length > 0 ? (
        x = arr.pop(),
        rec(arr)
    ) : null
    sum += x
}

rec(num) 

console.log(sum) */ // 15
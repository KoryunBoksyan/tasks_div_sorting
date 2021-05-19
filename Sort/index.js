// Two loop solution

const arr = [1, 5, 4, 98, 85, -6, 12, 11, 1, 8, 7, 92, 251, -150, 0, 7, 22, 85, -6];

// console.log(arr.length);

const arrSort = [];

for (let i = 1; i < arr.length; i++) {
    for (let k = i; k < arr.length; k++) {
        if (arr[i] > arr[k]) {
            let x = arr[i];
            // console.log(`x = ${x}`)
            arr[i] = arr[k];
            arr[k] = x;
        }
    }
    arrSort.push(arr[i]);
    // console.log(arr[i]);
}

console.log(arrSort);



// Using a variable

let min = 0;
const arrSort2 = [];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
        arrSort2.push(min);
        min = arr[i];
        // console.log(min);
    }
}

console.log(arrSort);




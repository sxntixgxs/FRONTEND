let arr = [4.6, 2.5, 2.5, 3.5]

// arr.forEach(function (e) {
//     console.log(e)
// });

// arr.forEach(e => console.log(e * 0.8 + 1));

// let curv8 = arr.map(e => e * 0.8 + 1)
// console.log(curv8)

// let may3 = arr.filter(function (e) {
//     if (e >= 3) return e
// })
// console.log(may3)

// let sumC8 = arr.reduce((c, e) => c + (e * 0.8 + 1))
// console.log(sumC8.toFixed(2))

function f(arr3) {

    arr3[0] = 1.0
}

let arr2 = [...arr]
arr2[0] = 5.0
console.log(arr2)
console.log(arr)

// f(arr)
// console.log(arr)

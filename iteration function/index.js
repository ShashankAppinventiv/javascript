const arr=[3,15,72,13,33,90,39,57,43]

//map

// It create new array from existing array by apply function

const mapCopyStoreageVariable= arr.map(item=>item*2)
console.log(mapCopyStoreageVariable)

//filter

//It create new array based on logical condition apply on each element with the help of callback function
const fun= a =>a%3;
const filterCopyStorageVariable= arr.filter(fun)
console.log(filterCopyStorageVariable)

//reduce

// reduce it array items into single value
const redu=a=>a+a;
const reduceCopyStorageVariable= arr.reduce(redu)

console.log(reduceCopyStorageVariable);


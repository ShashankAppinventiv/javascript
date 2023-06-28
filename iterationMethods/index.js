// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// while loop example

var arr=[]
console.log("Initial array")
console.log(arr)
//adding element using while loop
let i=1
while(i<=5)
{
    arr.push(i)
    i++;
}
console.log("Element after while loop iteration")
console.log(arr);

//do-while loop

do{
    arr.push(i)
    i++;
  }while(i<=10);
console.log("Element after do-while loop iteratation")
console.log(arr)

//for loop iteration

for(;i<=15;i++)
{
    arr.push(i)
}
console.log("Element after for-loop iteration")
console.log(arr)

//foreach loop for array iteration
console.log("for each loop iteration")
arr.forEach(item=>{
    console.log(item)
})


// let promises=new Promise(function(resolve,reject){
//     setTimeout(() =>resolve("Work have been done"),1000)    
// })
// promises.then(
//     result=>console.log(result)
// );
let promises=new Promise(function(resolve,reject){
    var num=99
    if(num%2==0){
        setTimeout(()=>resolve("Number is even"),1000)
    }    
    else {
        setTimeout(()=>reject("Number is odd"),1000)
    }
})
console.log("Wait processing data");
promises.then(
    result=>console.log(result),
    error=>console.log(error)
);
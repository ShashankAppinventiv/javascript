
//var 
/*
* Global scope
* can be redefine
* can be redeclared
*/
const vartest= () => {
    var a= 10//defining a variable
    console.log(a)
    var a=11// Re-declare a variable
    console.log(a)
}
vartest()

//let 
/*
* block level
* can be redefine
* can not be redeclared
*/

const letTest= () => {
    let b= 12
    console.log(b)
    //In blow statement if try to re-declare variable b then it show error message
    //let b= 10
    //but we can re-define it's value
    b=13
    console.log(b)
}
letTest()

//const
/*
* block level
* can not be redefine
* can not be redeclared
*/
const constTest= () => {
    const c= 13
    //In Case of const we can't re-declare or de-define the variable value
    //let c= 10 //show error
    //c=11 //also show error
    console.log(c)
}
constTest()
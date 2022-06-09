// const arr =[1,2,3,4,5];

// function double(x){
//     return x>4;
// }

// const output = arr.reduce(double);
// console.log(output);

//promises

let p = new Promise(function(resolve, reject){
    let a = 1+10;
    if(a==2)
    resolve("success")
    else
    reject("failed")
})

p.then(function(message){
    console.log("this is then "+ message)
}).catch(function(message){
    console.log("this is catch "+ message)
})
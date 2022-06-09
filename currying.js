function mult(x){
    return function (y){
         return function(z){
            return x*y*z;
         }     
    }
    
}

console.log(mult(2)(3)(4));
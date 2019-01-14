function multiply(x,y){
    return x * y;
}


let timer = new Promise(function(resolve, reject){
    setTimeout(function(){
        let bool = false;
        if(bool){
            resolve("resolved");
        }
        else{
            reject("rejected");
        }
    }, 3000);
});

timer.then(res => {
    console.log(res);
    return new Promise(function(resolve, reject){
        let bool = true;
        if(bool){
            resolve("resolved2");
        }
        else{
            reject("rejected2");
        }
    });
}).then(res2 => {
    console.log(res2);
}).catch(err => {
    return new Promise(function(resolve, reject){
        resolve("öoaihfü0iadf");
    })
}).then(result => {
    console.log("rej" + result);
})

let arr = [];

arr.push("Hello");
console.table(arr);
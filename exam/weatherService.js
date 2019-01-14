exports.weather = new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.open("get", "https://api.apixu.com/v1/current.json?key=9a446f698117469eb5c110445180411&q=Bern");
    req.onload = function(){
        if(req.status === 200){
            resolve(req.responseText);
        }
        else{
            reject("Api Error");
        }
    }
    req.send();
});
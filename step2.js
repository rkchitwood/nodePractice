const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', function(err,data){
        if(err){
            console.error("Error: ", err);
            process.exit(1);
        }
        console.log(data);
    })
}

async function webCat(URL){
    try{
        resp = await axios.get(URL);
        console.log(resp.data);
    }catch(err){
        console.error('Error: ', err);
        process.exit(1);
    }
}

let arg = process.argv[2];

if(arg.slice(0,4) === 'http'){
    webCat(arg);
}else{
    cat(arg)
}
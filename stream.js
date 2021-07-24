const fs = require('fs')
const readstream = fs.createReadStream('./docs/daya.txt',{encoding: 'utf-8'})
const writestream = fs.createWriteStream('./docs/daya1.txt')

readstream.on('data',(chunk)=> { 
    console.log(chunk);
    
    writestream.write(chunk)
})
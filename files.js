const fs = require('fs'); 

// Reading from file 

// fs.readFile('./docs/daya.txt',(err,data)=>{
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString);
// })

// Writing to file 

// fs.writeFile('./docs/daya1.txt','Hello Rama',(err) => { 
//     if(err) {
//         console.log(err)
//     }
//     console.log("file written");
// })

// creating and removing directories 

// if(!fs.existsSync('./assests')) 
// {
//     fs.mkdir('./assests',(err)=>{
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder created');
//     })
// }
// else { 
//     fs.rmdir('./assests',(err)=>{
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder removed');
//     })
// }


// deleting files 

if(fs.existsSync('./docs/daya1.txt')) {
    fs.unlink('./docs/daya1.txt', (err)=> { 
        if (err) { 
            console.log(err)
        }
        console.log('file removed')
    })
}
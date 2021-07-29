const fs = require('fs');

fs.writeFile('demo1.txt','Text Sample',( err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Write Done");
    }
})
fs.appendFile('demo1.txt',' new txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Appened Done');
    }
})

fs.readFile('demo1.txt','utf-8', (data, err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})
fs.rename('demo1.txt','demo2.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Rename Successful');
    }
})
fs.exists('demo2.txt', (result)=>{
    if(result){
        console.log("Found")
    }else{
        console.log('Not Found');
    }
})
fs.existsSync('demo2.txt');
 (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('\nSuccessful');
    }
}
// fs.unlink('demo2.txt' ,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('\nSuccessful Unlink');
//     }
// })


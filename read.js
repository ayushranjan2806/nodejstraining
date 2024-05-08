const fs =require('fs')

const filename =process.argv[2];
if(!filename){
    console.log("throwing an error ")
    process.exit(1);

}

fs.readFile(filename,'utf-8',(err,data)=>{
    if(err){
        console.error(`error reading file :${err}`);
        process.exit(1);

    }
    console.log("file content:")
    console.log(data)
})

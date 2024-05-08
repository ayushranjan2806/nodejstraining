const name1=process.argv[2];

if(name1){
    console.log(`Hello ${name1}`);
}
else{
    console.log("usage: node greet.js <name>");

}
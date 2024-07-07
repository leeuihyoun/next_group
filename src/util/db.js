const {MongoClient} = require('mongodb');
// npm install mongodb
const url = "mongodb+srv://admin:admin@cluster0.1ygidjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let connectDB;

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo =  new MongoClient(url,options).connect();
    }
    connectDB = global._mongo;
}else{
    connectDB =  new MongoClient(url,options).connect();
}


export {connectDB};
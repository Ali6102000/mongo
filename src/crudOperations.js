import {config} from 'dotenv';
import { Collection, MongoClient } from 'mongodb';
async function connect(uri){
    try {
        let mongoClient=new MongoClient(uri);
        await mongoClient.connect();
        console.log("connection to mongoDB succeded!!!")
        return mongoClient;
    
    } catch (error) {
        console.error("connection to mongoDB failed!!!")
    }

}

    


export async function insertData(collection,documentObject){
    let mongoClient;
    const uri=process.env.DB_URI;
     mongoClient=await connect(uri);
     const db=mongoClient.db("school");
      collection=db.collection(collection);
   await  collection.insertOne(documentObject);


}

export async function findStudentByName(collectionName,lastName){
    let mongoClient;
    const uri=process.env.DB_URI;
     mongoClient=await connect(uri);
     const db=mongoClient.db("school");
     const collection=db.collection(collectionName);
     return  collection.find({lastName}).toArray();

}

export async function updateStudentByName(collectionName,lastName,updateFields){
    let mongoClient;
    const uri=process.env.DB_URI;
     mongoClient=await connect(uri);
     const db=mongoClient.db("school");
     const collection=db.collection(collectionName);
     return await collection.updateMany(
        {lastName:lastName},
        {$set:{name:updateFields}}
     )
}
    

export async function deleteByname(collectionName,name){
    let mongoClient;
    const uri=process.env.DB_URI;
     mongoClient=await connect(uri);
     const db=mongoClient.db("school");
     const collection=db.collection(collectionName);
     return await collection.deleteMany({name:name});
}


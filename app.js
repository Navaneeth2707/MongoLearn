const {MongoClient} =require("mongodb")
const url=require("./atlas_url")
console.log(url);


const client =new MongoClient(url)
const dbname="learndb";
const connecToDatabase = async () => {
    try{
        
        await client.connect();
        console.log(`Connected to the ${dbname} database`);
    }catch(err)
    {
        console.log(err);
    }
};
const accountCollection = client.db("learndb").collection("Cluster0")
const sampleData= 
{
    accuunt_name : "navaneeth",
    aid : "QQKMKM",
    type : "saving",
    balance : 10000,
    last_update : new Date(),

}

const main =async () =>{
    try{
        await connecToDatabase();
        let result=await accountCollection.insertOne(sampleData);
         console.log(result);
    }catch(err)
    {
        console.log("err1")
    }
    finally
    {
        await client.close();
    }
};
main();


const {MongoClient} =require("mongodb")
const { ObjectId } = require("mongodb")
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
// const sampleData= 
// [
//   {  accuunt_name : "cdc",
//     aid : "dvsz",
//     type : "saving",
//     balance : 10424000,
//     last_update : new Date(),
// },
// {  accuunt_name : "navfdvxdvaneetdfh",
//     aid : "xcvxvdfv",
//     type : "saving",
//     balance : 1070,
//     last_update : new Date(),
// },
// ]

// const documuntstofind ={balance:{ $gt:1000}}


const documuntstoUpadate ={_id: new ObjectId("679b78c2294989433aaf302c")} 
const update ={ $inc:{balance:100}};
const main =async () =>{
    try{
        await connecToDatabase();

    //   let result=  await accountCollection.find(documuntstofind).toArray();
       
    //   let docCount =await accountCollection.countDocuments(documuntstofind)

    //   await result.forEach(doc =>console.log(doc));

    //      console.log(`doc found${docCount}`);
    //      console.log(result);
    let result=await accountCollection.deleteMany(update);
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


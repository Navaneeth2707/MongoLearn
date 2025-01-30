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

const main =async () =>{
    try{
        await connecToDatabase();

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


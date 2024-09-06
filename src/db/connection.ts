import mongoose from "mongoose";
import { MongoClient } from "mongodb";

async function mongoDb() {
    const url = "mongodb+srv://devenderdhyani:Witz%402024@cluster0.gfpsm.mongodb.net/prisma?retryWrites=true&w=marity";
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        // Get the default database
        console.log("connectedd with the database...")
        // const collections = await db.listCollections().toArray();
        // const collectionNames = collections.map(collection => collection.name);
        // const posts = await db.collection('Post').find({}).toArray();
        // console.log('Collection names:', collectionNames);
        // console.log(posts)

    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        throw error;
    }
}

mongoDb()

const db = mongoose.connection
// const db = client.db();
export {
    db
}
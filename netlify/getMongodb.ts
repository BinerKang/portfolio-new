
import { Db, MongoClient } from "mongodb";

const MONGODB_URI = `mongodb+srv://root:${process.env.MDB_PASSWORD}@cluster0.ooqoq9o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let cachedDb: Db | null = null;

async function getMongoDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(MONGODB_URI);

  cachedDb = client.db("movieDB");
  return cachedDb;
}

export default getMongoDb

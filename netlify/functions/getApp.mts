import { Context } from "@netlify/functions"
import getMongoDb from "../getMongodb"
import { SortDirection } from "mongodb"

export const handler = async function (req: Request, context: Context) {

  try {
    const db = await getMongoDb()

    const moviesColl = db.collection("apps")
 
    const options = {
      sort: { order: -1 as SortDirection },
      projection: { _id: 0 }
    }
  
    const data = await moviesColl.find({}, options).toArray()
    return Response.json(data)
  } catch(error) {
    console.error(JSON.stringify(error))
    return Response.json({msg: error.message}, {status: 500})
  }
 
}
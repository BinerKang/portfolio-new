import fetch from 'node-fetch'

export const handler = async function () {

  console.log('Begin Fetch Apps Key:' + process.env.MONGODB_API_KEY)
  const res = await fetch('https://eastasia.azure.data.mongodb-api.com/app/data-unyhv/endpoint/data/v1/action/aggregate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.MONGODB_API_KEY
    },
    body: JSON.stringify({
      "dataSource": "Cluster0",
      "database": "movieDB",
      "collection": "apps",
      "pipeline": [
        {
          "$sort": { "order": -1 }
        },
        {"$project": { "_id": 0} }
      ]
    })
  });
  const data = await res.json()
  return {
    statusCode: 200,
    body: JSON.stringify({apps: data.documents})
  }
}
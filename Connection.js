const { MongoClient} = require("mongodb")

let uri = "mongodb+srv://kore:1234@cluster0.i64qq87.mongodb.net/test"

const mongoClient = new MongoClient(uri)

mongoClient.connect()

console.log("Connecting to MongoDB Atlas cluster...");

const db = mongoClient.db("PetsAtlas")
 
const collection =  db.collection("dogs")

const methods = {

    get: async () => await collection.find({}).toArray(),

    insert: async (newPet) => await collection.insertOne(newPet),

    update: async (name ,updatePet) => await collection.updateOne(name, updatePet),

    deleteOne: async name => await collection.deleteOne(name) 
}

methods.get().then(rows => console.log(rows))

module.exports = methods
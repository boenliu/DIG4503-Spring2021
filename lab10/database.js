import MongoClient from "mongodb";

export default class Database {
  constructor(){
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect(){
    this.connection = await MongoClient.connect("mongodb+srv://BoenLiu:rDvqmB0u3x4HBpgn@cluster0.yuzwq.mongodb.net", {useUnifiedTopology: true});
    this.database = this.connection.db("lab10");
    this.collection = this.database.collection("people");
    console.log("database connected");
  }

  async readOne(query){
    let results = await this.collection.findOne({firstName: query});
    if(results != null){
      return results;
    }else{
      return {person: "not found"};
    }
  }

  async createOne(first, last, color){
    let object = {
      "firstName": first,
      "lastName": last,
      "favoriteColor": color
    };

    if(this.collection != null)
      await this.collection.insertOne(object);

    return this.readOne(first);
  }

  close(){
    if(this.connection !=null){
      this.connection.close();;
    }
  }
}

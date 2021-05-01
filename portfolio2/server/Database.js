import MongoClient from 'mongodb';

const url = "mongodb+srv://BoenLiu:rDvqmB0u3x4HBpgn@cluster0.yuzwq.mongodb.net";

class Database {
  constructor(){
    this.connection = null;
    this.database = null;
    this.collection = null;
  }

  async connect(database, collection){
    console.log("attempting to connect");
    this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});
    this.database = this.connection.db(collection);
    this.collection = this.database.collection(database);
    console.log("connected");
  }

  close(){
    if(this.connection != null){
      this.connection.close();
    }
  }

  async createOne(request, id){
    let createdResult = null;

    if(this.collection != null){
      createdResult = await this.collection.insertOne({
        ID: id,
        name: request.name,
        user: request.user
      });
    }

    return createdResult;
  }

  async readOne(id, user){
    let foundDocument = null;

    if(this.collection != null){
      console.log(id, user);
      foundDocument = await this.collection.findOne({ID: id, user: {$ne: user}});
    }

    if(foundDocument)
      return foundDocument;
    else
      return {user: "not found"};
  }

  async findAllUserPokemon(user){
    let pokemon = null;

    if(this.collection != null){
      pokemon = await this.collection.find({user: user}).toArray();
    }

    return pokemon;
  }

  async updateOne(query, update){
    let updatedResult = null;

    if(this.collection != null){
        updatedResult = await this.collection.updateOne(query, {$set: update});
    }

    return updatedResult;
  }

  async deleteOne(id, user){
    let deletedResult = null;

    if(this.collection != null){
      deletedResult = await this.collection.deleteOne({"ID": id, });
    }

    return deletedResult;
  }
}

export default Database;

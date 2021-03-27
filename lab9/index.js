import MongoClient from 'mongodb';

const url = "mongodb+srv://BoenLiu:rDvqmB0u3x4HBpgn@cluster0.yuzwq.mongodb.net";

async function connect(){
    let connection = await MongoClient.connect(url, {useUnifiedTopology: true});

    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    let results = await collection.find({beds: {$gte: 5}, price: {$lte: 200}, "review_scores.review_scores_rating" : {$gte: 99}}).toArray();

    console.log(results);

    connection.close();
}

connect();

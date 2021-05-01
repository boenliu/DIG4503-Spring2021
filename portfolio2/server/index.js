import Database from './Database.js';
import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;
const db = new Database();
App.use(CORS());
App.use(Express.json());

// add pokemon to their list
App.put("/pokemon/:id", async (request, response) => {
  let putResponse = await db.createOne(request.body, request.params.id)
  response.json(putResponse);
});

// get neighbor function
App.get("/pokemon/:id", async (request, response) => {
  let getResponse = await db.readOne(request.params.id, request.body.user);
  response.json(getResponse);
});

// find all user's pokemon
App.post("/pokemon/search/", async (request, response) => {
  let postResponse = await db.findAllUserPokemon(request.body.user);
  console.log(request.body.user);
  console.log(postResponse);
  response.json(postResponse);
});

App.patch("/pokemon/:id", (request, response) => {
  response.json(db.updateOne(request.query));
});

App.delete("/pokemon/:id", (request, response) => {
  response.json(db.deleteOne(request.params.id, request.query.user));
});

App.listen(port, function(){
  console.log("Server started on port: " + port);
  db.connect("BoenLiu", "portfolio2");
});

import Axios from 'axios';
import Database from './Database.js';
import Express from 'express';

const App = Express();
const port = 45030;
const db = new Database();
App.use(Express.json());

App.put("/books/:ISBN", (request, response) => {
  db.connect();
  response.json(db.createOne(request.body));
  db.close();
});

App.get("/books/:ISBN", (request, response) => {
  db.connect();
  response.json(db.readOne(request.query));
  db.close();
});

App.post("/books/search", (request, response) => {
  db.connect();
  response.json(db.readMany(request.query));
  db.close();
});

App.patch("/books/:ISBN", (request, response) => {
  db.connect();
  response.json(db.updateOne(request.query));
  db.close();
});

App.delete("/books/:ISBN", (request, response) => {
  db.connect();
  response.json(db.deleteOne(request.query));
  db.close();
});

App.listen(port, function(){
  console.log("Server Running on port " + port);
});

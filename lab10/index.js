import Express from 'express';
import Database from './database.js';

const E = Express();
const port = 45030;

const D = new Database();
D.connect();

E.put('/people/create/:firstName/:lastName/:favoriteColor', async function(request, response){
  let result = await D.createOne(request.params.firstName, request.params.lastName, request.params.favoriteColor);
  response.json(result);
});

E.get('/people/:person', async function(request, response){
  let name = await D.readOne(request.params.person);
  console.log(name);
  response.json(name);
});

E.listen(port, function(){
  console.log("Server running on port: ", port);
});

D.close();

import Express from 'express'; // importing express to set up express server

// creating an instance of express
const App = Express();
// the port that the server is listening on
const port = 45030;
// json object that has my name and my favorite color
const objectPerson = {
  "name" : "BoEn",
  "color" : "#24635d"
}

// first get method that sends the response: "hello world!"
App.get('/', function (request, response){
  response.send("Hello World!");
});

// second get method that sends the objectPerson json object
App.get('/person', function(request, response){
  response.json(objectPerson);
});

// having the express server listen on port 45030 as well as send a string to the console stating the server started on port ____.
App.listen(port, function(){
  console.log("server started and listening on port " + port);
})

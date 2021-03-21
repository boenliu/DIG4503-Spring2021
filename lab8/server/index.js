import Express from 'express'
import CORS from 'cors';

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

const E = Express();
const port = 45030;
E.use(CORS());


E.get('/people/:person', function(request, response){
  if(names.includes(request.params.person)){
    response.json({name: request.params.person});
  } else {
    // response.send(request.params.person); // this is just a debugging line to see what my input was.
    response.json({name: "not found"});
  }
});

E.get('/search/:name', function(request, response){
  if(names.filter(element => element.includes(request.params.name)).length > 0){
    response.json({search: names.filter(element => element.includes(request.params.name))})
  }else{
    response.json({search: ["not found"]})
  }
});

E.put('/people/:person', function(request, response){
  names.push(request.params.person);
  response.json({name: request.params.person});
});

E.listen(port, function(){
  console.log("Server running on port: ", port);
});

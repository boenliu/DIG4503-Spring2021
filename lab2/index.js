// importing the class Fetch from fetch.js
import Fetch from "./fetch.js";

// creating a new Fetch class object and then fetching the name of the pokemon and the Id of the pokemon with a teal color
let fValid = new Fetch("https://pokeapi.co/api/v2/pokemon/pikachu", "#42f5e3");
fValid.fetch();

// creating a new Fetch class object, however, this is an invalid pokemon so an error will be caught through the .catch part of the axios promise.
// I think the hex color is red just in case chalk.red() fails. to be honest, i'm not sure why i even bothered making it red.
const fInvalid = new Fetch("https://pokeapi.co/api/v2/pokemon/fdsa", "#f54242");
fInvalid.fetch();

/*
for some reason, 2 out of 3 times the fvalid.fetch() result will come after the
finvalid.fetch() result. i have no idea why it does this and my mind is too mush
from the rest of my programming classes and group projects I have to try to
understand it.
*/

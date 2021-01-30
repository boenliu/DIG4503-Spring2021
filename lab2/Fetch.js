// imports axios and chalk from the respective modules
import axios from "axios";
import chalk from "chalk";

class Fetch {
  // class constructor that assigns the pokemon and color to the respective this.___
  constructor(pokemon, color) {
    this.pmon = pokemon;
    this.clr = color;
  }

  // this method was used for debugging. I wasn't able to call this.clr in line 28. However, I was able to call this.clr outside of the "axios .then function"
  repeatAfterMe(){
    console.info(chalk.hex(this.clr)("repeatAfterMe"));
  }

  // the fetch method
  fetch(){
    // i needed to add this so that i could call "this.clr" for the color inside of the .then part of axios.
    const self = this;

    // the axios getter(?) promise(?) that pulls the pokemon from the this.pmon url.
    axios(this.pmon)
      .then(function (response){
        // set the response data as a variable poke.
        const poke = response.data;
        // calls a chalk.hex so that it displays the message in
        console.info(chalk.hex(self.clr)("The pokemon you chose is: " + poke.name + "\nID: " + poke.id));
      })

      // the error handling part of the axios promise. If there is an error, it will display it in red.
      .catch(function (error) {
        console.info(chalk.red(error));
      });
  }
}

// exporting the class of Fetch.
export default Fetch;

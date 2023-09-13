/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Spaceship {
    score = 0
    constructor(lives) {
        this.lives = lives;
    }

    shoot (){
        "pew"
    }
}

class FlyingAlien {
    speed = 1;
    constructor(type) {
        this.type = type;
        switch (this.type){
            case "Crab": this.value = 10;
                this.weapons = false;
                break;
            case "ET": this.value = 20;
                this.weapons = false;
                break;
            case "Squid": this.value = 40;
                this.weapons = true;
                break;
            case "SpaceShip": this.value = 100;
                this.weapons = false;
                break;
        }
    }
    increaseSpeed (speed){
        this.speed = speed;
    }
}



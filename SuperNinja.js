class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => {
        console.log(this.name)
    }
    
    showStats = () => {
        console.log("Name " + this.name,
        "Health " + this. health, 
        "Speed " + this.speed, 
        "Strength " + this.strength)
    }
    
    drinkSake = () => {
        this.health += 10;
        return console.log("Health " + this.health);
    }
}


class Sensei extends Ninja{
    constructor(name, health = 100, speed = 3, strength = 3, wisdom = 10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom
    }
    drinkSake = () => {
        this.health += 10;
        return console.log("Health " + this.health);
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("The 20 minute rule means 20 minutes");
    }
}

const sensei = new Sensei("Hero");
sensei.speakWisdom()
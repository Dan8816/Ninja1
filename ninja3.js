//part1
class Ninja
{
    constructor(name)
    {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName()
    {
        console.log(`My name is ${this.name}`);
    }
    showStats()
    {
        console.log(`My name is ${this.name}, and I have ${this.health} health, and ${this.speed} speed, and ${this.strength} strength!`)
    }
    drinkSake()
    {
        this.health += 10;
        console.log(`My health is now ${this.health}, thank you for the Sake`)
    }
}
const Donotello = new Ninja("Donotello");
Donotello.sayName();
const Leonardo = new Ninja("Leonard0");
Leonardo.showStats();
const Michaelangelo = new Ninja("Michaelangelo");
Michaelangelo.drinkSake();
//part2
class Sensei extends Ninja
{
    constructor(name)
    {
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdeom = 10;
    }
    speakWisdom()
    {
        this.drinkSake();
        console.log("You know you're right when you stop looking to the left";)
    }
}
const Splinter = new Sensei("Splinter");
Splinter.speakWisdom();

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
        console.log(this.name);
    }
    showStats()
    {
        console.log(this.name + "my health is " + this.health +
        ", and my speed is " + this.speed + ", and my strength is " + this.strength);
    }
    drinkSake()
    {
        this.health += 10;
    }
}
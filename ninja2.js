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
Ninja.prototype.punch = function(OtherNinja)
{
    if ((OtherNinja instanceof Ninja)==true)
    {
        OtherNinja.health -= 5;
        console.log(OtherNinja.health);
    }
    else
    {
        console.log("not a ninja");
    }
}
Ninja.prototype.kick = function(OtherNinja)
{
    if ((OtherNinja instanceof Ninja)==true)
    {
        var damage = this.strength*15;
        OtherNinja.health -= damage;
        console.log(OtherNinja.health);
    }
    else
    {
        console.log("not a ninja");
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.punch(redNinja);

abstract class Avengers {
    name: string;
    protected constructor(name: string) { this.name = name; }

    abstract fight(): void
}

class Characters extends Avengers {

    constructor(name: string) {
        super(name);
    }

    fight(): void {
        console.log(`${this.name} can fight with gun in hand`);
    }

    fly: Function = (): void => console.log(`${this.name}`)

}

let ironMan: Avengers;

// Create a new character 
ironMan = new Characters("Iron Man");
let spiderMan = new Characters("Spider Man")

//Call function in abstract is ok <-> but cannot with no declare in abstract
ironMan.fight()

spiderMan.fly()
spiderMan.fight()
class Player{
    constructor(pos1, pos2, bikeColorChoice) {
        this.bikeColorChoice = color || '#fff';
        this.pos1 = pos1;
        this.pos2 = pos2;
        this.dead = false;
        this.direction = '';
        this.key = "";


        this.constructor.counter = (this.constructor.counter || 0) + 1;
        this.playerId = this.constructor.counter;

        Player.allInstances.push(this);
    };
};

Player.allInstances = [];

let p1 = new Player();
let p2 = new Player();
let p3 = new Player();
let p4 = new Player();
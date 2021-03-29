import Loot from './Loot';
import Monsters from './Monsters.js';
import Stairs from './Stairs.js';

const lootTable = [
    {name: 'Magic Sword', color: 'blue', ascii:'⚒', offset: {x: 6, y:3}},
    {name: 'HP Potions', color: 'red', ascii:'⚱', offset: {x: 6, y:3}},
    {name: 'Gold Coin', color: 'yellow', ascii:'￥', offset: {x: 2, y:2}},
    {name: 'Armor', color: 'lightgrey', ascii:'⚛', offset: {x: 4, y:3}},
];

const monsterTable= [
    {name: 'Slime', color: 'OliveDrab', ascii:'⚉', offset: {x: 6, y:3}, health: 5},
    {name: 'Zombie', color: 'black', ascii:'☦', offset: {x: 6, y:3}, health: 8},
    {name: 'Goblin', color: 'OliveDrab', ascii:'☃', offset: {x: 3, y:3}, health: 6},
    {name: 'Vamppire', color: 'Teal', ascii:'℣', offset: {x: 4, y:3}, health: 10},
];

class Spawner {
    constructor(world) {
        this.world = world;
    }
    spawn(spawnCount, createEntity) {
        for ( let count = 0; count < spawnCount; count++ ) {
            let entity = createEntity();
            this.world.add(entity);
            this.world.moveToSpace(entity);
        }
    }
    spawnLoot(spawnCount) {
        this.spawn(spawnCount, ()=> {
            return new Loot(
                getRandomInt(this.world.width -1),
                getRandomInt(this.world.height -1),
                this.world.tilesize,
                lootTable[getRandomInt(lootTable.length)]
            );
        });
    }

    spawnMonsters(spawnCount) {
        this.spawn(spawnCount, ()=> {
            return new Monsters(
                getRandomInt(this.world.width),
                getRandomInt(this.world.height),
                this.world.tilesize,
                monsterTable[getRandomInt(monsterTable.length)]
            );
        });
    }

    spawnStairs() {
        let stairs = new Stairs(
          this.world.width - 10,
          this.world.height - 10,
          this.world.tilesize
        );
        this.world.add(stairs);
        this.world.moveToSpace(stairs);
      }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;
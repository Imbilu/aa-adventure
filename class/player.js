const fromItem = require('./item');
const Item = fromItem.Item;

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    // Picks up an item from a room into the player's inventory
    takeItem(itemName) {
        let pickedItem = this.currentRoom.getItemByName(itemName);
        this.items = this.items.concat(pickedItem);

    }

    // Drops an item the player is holding into their current room
    dropItem(itemName) {
        let idx;
        for (const item of this.items) {
            if (item.name === itemName) {
                idx = this.items.indexOf(item);
            }
        }
        console.log(idx);
        let droppedItem = this.items.splice(idx, 1);
        this.currentRoom.items.concat(droppedItem);
    }

    eatItem(itemName) {
        if (itemName.isFood) {
            let idx = this.items.indexOf(itemName);
            this.items.splice(idx, 1);
        }
    }

    // Retrieves an item from a player's inventory by name
    getItemByName(name) {
        let idx = this.items.indexOf(name);
        let gotItem = this.items.splice(idx, 1);
        return gotItem[0];
    }
}

module.exports = {
  Player,
};

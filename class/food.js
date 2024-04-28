const fromItem = require('./item');
const Item = fromItem.Item;

class Food extends Item{
  constructor(name, description, food) {
    super(name, description);
    this.food = true;
  }
}

module.exports = {
  Food,
};

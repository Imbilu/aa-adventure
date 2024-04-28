const fromItem = require('./item');
const Item = fromItem.Item;

class Food extends Item{
  constructor(name, description, isFood) {
    super(name, description);
    this.isFood = true;
  }
}

module.exports = {
  Food,
};

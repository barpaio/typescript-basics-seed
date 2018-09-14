const pizza = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  }
};

const toppings = ['pepperoni'];

const order = {
  pizza,
  toppings
};

console.log(order);
console.log(pizza.getName());

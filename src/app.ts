const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni']
};

function order({name: pizzaName, toppings: pizzaToppings}) {
  return { pizzaName, pizzaToppings };
};

const { pizzaName } = order(pizza);

console.log(pizzaName);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [ one, two, three ] = toppings;

console.log(two);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
};

logToppings(toppings);

/*
Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off().
 Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова,
каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний.
Використовує класи до es6 стандарту.
*/

function CoffeeMake(coffeeVariety, water) {
  this.coffeeVariety = coffeeVariety;
  this.water = water;
  this.isTurnedOn = false;
}

CoffeeMake.prototype.on = function () {
  if (!this.isTurnedOn) {
    console.log("Кавоварка увімкнена.");
    this.isTurnedOn = true;
  } else {
    console.log("Кавоварка вже увімкнена.");
  }
};
CoffeeMake.prototype.off = function () {
  if (this.isTurnedOn) {
    console.log("Кавоварка вимкнена.");
    this.isTurnedOn = false;
  } else {
    console.log("Кавоварка вже вимкнена.");
  }
};

// Створення конструктора DripCoffeeMaker
function DripCoffeeMaker(coffeeVariety, water, filter) {
  CoffeeMake.call(this, coffeeVariety, water);
  this.filter = filter;
}

// Встановлюємо прототип DripCoffeeMaker, як об'єкт, створений з CoffeeMake.prototype
DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

// Встановлюємо конструктор DripCoffeeMaker належним чином
DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;

// Додавання власного методу для DripCoffeeMaker
DripCoffeeMaker.prototype.brew = function () {
  console.log(
    `Приготовлення кави зі сорту ${this.coffeeVariety} за допомогою капельної кавоварки.`
  );
};

//Cтворення екземпляра класу DripCoffeeMaker
let drip = new DripCoffeeMaker("Arabika", "300ml", "paper");

//Викликати методи
console.log(drip);
console.log(`Вид кави: ${drip.coffeeVariety}`);
console.log(`Кількість води: ${drip.water}`);
console.log(`Фільтр: ${drip.filter}`);
drip.on();
drip.brew();
drip.off();

// Створення конструктора EspressoMachine

function EspressoMachine(coffeeVariety, water, filter) {
  CoffeeMake.call(this, coffeeVariety, water);
  this.filter = filter;
}

// Встановлюємо прототип   EspressoMachine, як об'єкт, створений з CoffeeMake.prototype
EspressoMachine.prototype = Object.create(CoffeeMake.prototype);

// Встановлюємо конструктор  EspressoMachine належним чином
EspressoMachine.prototype.constructor = EspressoMachine;

// Додавання власного методу для EspressoMachine

EspressoMachine.prototype.brew = function () {
  console.log(
    `Приготовлення кави зі сорту ${this.coffeeVariety} за допомогою капельної кавоварки.`
  );
};

//Cтворення екземпляра класу   EspressoMachine
let carob = new EspressoMachine("Brasilia", "300ml", "metal");

//Викликати методи
console.log(carob);
console.log(`Вид кави: ${carob.coffeeVariety}`);
console.log(`Кількість води: ${carob.water}`);
console.log(`Фільтр: ${carob.filter}`);
carob.on();
carob.brew();
carob.off();

// Створення конструктора CoffeeMachine

function CoffeeMachine(coffeeVariety, water, filter) {
  CoffeeMake.call(this, coffeeVariety, water);
  this.filter = filter;
}

// Встановлюємо прототип  CoffeeMachine, як об'єкт, створений з CoffeeMake.prototype
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);

// Встановлюємо конструктор  CoffeeMachine належним чином
EspressoMachine.prototype.constructor = EspressoMachine;

// Додавання власного методу для EspressoMachine

EspressoMachine.prototype.brew = function () {
  console.log(
    `Приготовлення кави зі сорту ${this.coffeeVariety} за допомогою капельної кавоварки.`
  );
};

//Cтворення екземпляра класу   EspressoMachine
let original = new EspressoMachine("Robusta", "filtered water", "metal");

//Викликати методи
console.log(original);
console.log(`Вид кави: ${original.coffeeVariety}`);
console.log(`Кількість води: ${original.water}`);
console.log(`Фільтр: ${original.filter}`);
original.on();
original.brew();
original.off();

// // Базовий клас CoffeeMake з методами on() і off()
// class CoffeeMake {
//     constructor() {
//       this.isTurnedOn = false; // Початковий стан - вимкнуто
//     }

//     on() {
//       if (!this.isTurnedOn) {
//         console.log('Кавоварка увімкнена.');
//         this.isTurnedOn = true;
//       } else {
//         console.log('Кавоварка вже увімкнена.');
//       }
//     }

//     off() {
//       if (this.isTurnedOn) {
//         console.log('Кавоварка вимкнена.');
//         this.isTurnedOn = false;
//       } else {
//         console.log('Кавоварка вже вимкнена.');
//       }
//     }
//   }

//   // Похідні класи для різних типів кавоварок
//   class DripCoffeeMaker extends CoffeeMake {
//     constructor() {
//       super(); // Викликаємо конструктор базового класу
//     }

//     brew() {
//       console.log('Приготовлення кави за допомогою капельної кавоварки.');
//     }
//   }

//   class EspressoMachine extends CoffeeMake {
//     constructor() {
//       super(); // Викликаємо конструктор базового класу
//     }

//     makeEspresso() {
//       console.log('Приготовлення еспресо за допомогою ріжкової кавоварки.');
//     }
//   }

//   class CoffeeMachine extends CoffeeMake {
//     constructor() {
//       super(); // Викликаємо конструктор базового класу
//     }

//     makeCoffee() {
//       console.log('Приготовлення кави за допомогою каво-машини.');
//     }
//   }

//   // Приклад використання

//   const dripCoffeeMaker = new DripCoffeeMaker();
//   dripCoffeeMaker.on();
//   dripCoffeeMaker.brew();
//   dripCoffeeMaker.off();

//   const espressoMachine = new EspressoMachine();
//   espressoMachine.on();
//   espressoMachine.makeEspresso();
//   espressoMachine.off();

//   const coffeeMachine = new CoffeeMachine();
//   coffeeMachine.on();
//   coffeeMachine.makeCoffee();
//   coffeeMachine.off();

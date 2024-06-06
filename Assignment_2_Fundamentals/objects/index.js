// const person = {
//   myName: "Ryan",
//   age: 28,
//   eyeColor: "Brown",
// };

// console.log(person);
// console.log(person.eyeColor);

// let day = "tue";
// let alarm;

// const myAlarm = {
//   weekEndAlarm: "no alarm needed",
//   weekDayAlarm: "get up at 7am",
// };

// if (day == "sat" || day == "sun") {
//   alarm = myAlarm.weekEndAlarm;
// } else {
//   alarm = myAlarm.weekDayAlarm;
// }

// console.log(alarm);


//Activity 1
// const person = {
//   myName: "Ryan",
//   isAwesome: true,
//   eyeColour: "Brown",

//   sayHi: function(){
//     console.log(`Hell! My name is ${this.myName}`)
//   }
  
// };

// console.log("1:", person);

// person.hairColour = "Black";

// person.beard = true;

// console.log("2:", person);

// person.favSongs = ["snap", "crackle", "pop"];

// console.log("3:", person);

// person.sayHi();


//Activity 2

const petRabbit ={
  petName: "Roger",
  typeOfPet: "Rabbit",
  petAge: "6",
  colorOfPet: "White",

  eat:function(){
    console.log (`${this.petName} is eating some lettuce`)

  },

  drink:function(){
    console.log (`${this.petName} is drinking some water`)

  }
}

petRabbit.eat();
petRabbit.drink();


//Activity 3

const coffeShop ={
  branch: "Springfield",
  drinksWithPrices:["coke 99p", "pepsi 99p","Tea £1.20","coffe £1.20", "Squishy £2.99"],
  foodWithPrices:["All-day-breakfast £7.99", "Ham sandwitch £2.60", "porridge 99p", "cookie £1.80"]
}
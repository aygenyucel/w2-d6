let carbonara;

let spaghetti = 400;
let guanciale = 250;
let eggYolks = 50 * 6;
let gratedPecorinoRomano = 50;
let blackPepper = 4;

console.log("First, we need to cut guanciale");

let cuttedGuanciale = guanciale;

console.log("Combine the egg yolks with the finely grated Pecorino Romano");

let mixtureEggCheese = eggYolks + gratedPecorinoRomano;

console.log("Roast the black pepper on a pan");

let pan = null;

pan += blackPepper;

console.log(
  "combine a small amount of it to the yolks and cheese mixture, set aside the rest"
);

let remainingBlackPepper = blackPepper / 3;
pan -= remainingBlackPepper;

console.log(
  "Brown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat"
);

console.log(
  "Take out the guanciale, leaving only the grease on the pan cool down."
);

let grease = 5; //5 g for grease on the pan
pan += cuttedGuanciale + grease;

pan -= cuttedGuanciale;

console.log(
  "Cook the pasta with a pinch of salt in the water (guanciale is already very salty);"
);

let water = 300;
let salt = 50;

let saltedWater = water + salt;

let droppedSpaghetti = saltedWater + spaghetti;

console.log(
  "set aside a ladleful of the pasta water before draining it, then drain the pasta once it is cooked al dente."
);

let remainingSaltedWater = saltedWater / 5;
droppedSpaghetti -= saltedWater;

console.log(
  "Pour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat:"
);
console.log(
  "this will create a creamy sauce with the pasta starch contained in that water."
);
pan += remainingSaltedWater;

console.log("TURN OFF THE HEAT AND SET ASIDE for 1 minute");
console.log("Then transfer the pasta to the same pan and mix together.");

pan += droppedSpaghetti;

console.log("Add the yolk and cheese mixture, stirring rapidly. ");
pan += mixtureEggCheese;

console.log("Add the remaining roasted black pepper and serve immediately.");
pan += remainingBlackPepper;

carbonara = pan;
console.log("The Result:", carbonara);

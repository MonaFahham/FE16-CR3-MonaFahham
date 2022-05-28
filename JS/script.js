let band1 = "Metallica";
let band2 = "George Michael";
let band3 = "Selena Gomez";
let band4 = "Jennifer Lopez";
let band5 = "Enrique Iglesias";
let band6 = "Shakira";
let band7 = "Taylor Swift";
let band8 = "Adele";
let band9 = "Ricky Martin";

let metallicaConcertPrice = 200;
let georgeConcertPrice = 100;
let selenaConcertPrice = 90;
let jenniferConcertPrice = 150;
let enriqueConcertPrice = 120;
let shakiraConcertPrice = 110;
let taylorConcertPrice = 90;
let adeleConcertPrice = 100;
let rickyConcertPrice = 115;

let festDay1 = metallicaConcertPrice + georgeConcertPrice + selenaConcertPrice;
let festDay2 = jenniferConcertPrice + enriqueConcertPrice + shakiraConcertPrice;
let festDay3 = taylorConcertPrice + adeleConcertPrice + rickyConcertPrice;

// It is possible to count the price here and use it later
let totalConcertPrice = festDay1 + festDay2 + festDay3;

console.log(
    `On the first day of the festival, I was lucky to watch bands ${band1}, ${band2} and ${band3}.`
);

console.log(
    `Then I watched the bands ${band4}, ${band5} and ${band6} on the second day and it cost me ${festDay2} in total that day.`
);

// console.log(
//     `I was a bit tired on the third day but it was so much worth it to watch the bands ${band7},${band8} and ${band9} and I spent ${
//     festDay1 + festDay2 + festDay3
//   } for the three days of the festival.`
// );

// we can use to totalConcertPric
console.log(
    `I was a bit tired on the third day but it was so much worth it to watch the bands ${band7},${band8} and ${band9} and I spent ${totalConcertPrice} for the three days of the festival.`
);

let savingPercetage = 0.3;

console.log(`My total price without any discount is ${totalConcertPrice}`);

let savingAmount = totalConcertPrice * savingPercetage;

console.log(`Saving amount is ${savingAmount}`);

let finalPayment = totalConcertPrice - savingAmount;

console.log(
    `If I had booked the concert with enough time in advance, it would have cost me a total of ${finalPayment} and I would have saved ${savingAmount}.`
);
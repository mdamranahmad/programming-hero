// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtotal = cartItems.reduce((subtotal, product) => {
    // console.log(subtotal, product);
    return subtotal + product.price * product.quantity;
}, 0);

// console.log(subtotal);

// Find best scorer

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];


const bestPlayer = players.reduce((player1, player2) => {
    return player1.score > player2.score
        ? player1 : player2 ;
});


console.log(`Best Player: ${bestPlayer.name}`);


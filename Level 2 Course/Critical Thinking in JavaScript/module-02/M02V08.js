//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

/* Working Sol1, Commenter for alternate sol
const result = sales.reduce((table, obj) => {
    // console.log(table, obj.category);
        if (!table[obj.category]) {
                table[obj.category] = 
                    { totalRevenue: obj.price * obj.quantity, itemCount: obj.quantity};
            } else {
                table[obj.category].totalRevenue = table[obj.category].totalRevenue + obj.price * obj.quantity;
                table[obj.category].itemCount = table[obj.category].itemCount +  obj.quantity;
            }
        // console.log(table);
        return table;

    // table[obj.category] ? table[obj.category]: 
    //     table[obj.category] =  
    //         { totalRevenue: obj.price * obj.quantity, itemCount: obj.quantity};
}, {});

console.log(result);
*/

// output
// {
//   Electronics: { totalRevenue: 1330, itemCount: 4 },
//   Books: { totalRevenue: 110, itemCount: 3 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// }


const salesByCategory = sales.reduce((table, sale) => {
    const {category, item, price, quantity} = sale;
    table[category] ? 
        (table[category].totalRevenue += price * quantity,
            table[category].itemCount += quantity 
        ) 
            : table[category] = { totalRevenue: price * quantity, itemCount: quantity} ;

    return table;

}, {});

console.log(salesByCategory);

// output
// {
//   Electronics: { totalRevenue: 1330, itemCount: 4 },
//   Books: { totalRevenue: 110, itemCount: 3 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// }
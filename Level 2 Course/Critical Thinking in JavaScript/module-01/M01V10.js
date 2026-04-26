
// a function to create an array of items for a given array length
// elements are taken randomly from an array of items
function generateSimData(size) {
    // a pool of items where some some values are duplicate
    const itemPool = [
        "Apple",
        "Mango",
        "Banana",
        "Orange",
        "Grape",
        "Strawberry",
        "Pineapple",
        "Watermelon",
        "Cherry",
        "Blueberry",
        "Apple",
        "Orange"
    ]

    const generateData = [];
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generateData.push(itemPool[randomIndex]);
    }

    return generateData;
}

const hugeDataSet = generateSimData(500000000);

console.log("Data size: ", hugeDataSet.length);

// Brute Force Method to remove the duplicate values from hugeDataSet

const arrStartTime = performance.now();

// a function to manually remove duplicate values from a given array
const removeDuplicate = (arr) => {
    const newArr = [];

    arr.forEach(e => {
        if (!newArr.includes(e)) {
            newArr.push(e);
        }
    });

    return newArr;
}

removeDuplicate(hugeDataSet);

const arrEndTime = performance.now();

console.log((`Array implementation took ${arrEndTime - arrStartTime} ms`));

// Set implementation

const setStartTime = performance.now();

// a function to create a set from a given array
const removeDuplicateSet = (arr) => {
    const set = new Set(arr);
    
    return Array.from(set);
}

removeDuplicateSet(hugeDataSet);

const setEndTime = performance.now();

console.log(`Set Implementation took ${setEndTime - setStartTime} ms`);


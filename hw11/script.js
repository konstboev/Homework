"use strict";

let stationeryStore = [
  {
    name: "pen",
    price: 15,
    category: "pens",
  },
  {
    name: "pencil",
    price: 10,
    category: "pens",
  },
  {
    name: "marker",
    price: 21,
    category: "pens",
  },
  {
    name: "bag",
    price: 36,
    category: "bags",
  },
];

function getNumber(message) {
  let number;
  do {
    number = +prompt(message, "0");
  } while (!isFinite(parseFloat(number)) || isNaN(number));
  return number;
}

function calcSumByKey(result) {
  let resultSum = 0;
  for (let i = 0; i < result.length; ++i) {
    resultSum += result[i].price;
  }
  console.log(resultSum);
}

function filterPriceOrCategory(item) {
  let operation;
  do {
    operation = +prompt(`Your actions?
    1. Filter of price
    2. Filter of category`);
  } while (
    operation > 2 ||
    operation < 1 ||
    !isFinite(parseFloat(operation)) ||
    isNaN(operation)
  );
  if (operation === 1) {
    return filterPrice(item);
  }
  if (operation === 2) {
    return filterCategory(item);
  }
}
// console.log(filterPriceOrCategory(stationeryStore));

function createNewProduce(item) {
  let newProduce;
  do {
    newProduce = {
      name: prompt("Enter the name of new produce", "pen"),
      price: getNumber(
        "Enter the price of new produce in the United States Dollars"
      ),
      category: prompt("Enter the category of new Produce", "pens"),
    };
    item.push(newProduce);
  } while (confirm("Anything else?"));
  return item;
}
// createNewProduce(stationeryStore);

function filterPrice(item) {
  let minPrice = getNumber("Indicate minimum price:");
  let maxPrice = getNumber("Indicate maximum price:");
  return item.filter((item) => item.price > minPrice && item.price <= maxPrice);
}
// console.log(filterPrice(stationeryStore));

function filterCategory(item) {
  let category = prompt("Enter the name of category:", "pen");
  return item.filter((item) => item.category === category);
}
// console.log(filterCategory(stationeryStore));

function lengthOfCategory(item) {
  let result = filterCategory(item);
  console.log(result.length);
}
// lengthOfCategory(stationeryStore);

function deleteItemByName(item) {
  let deletedName = prompt("What name you want delete?", "pen");
  for (let i = 0; i < item.length; i++) {
    if (item[i].name === deletedName) {
      item.splice(i, 1);
      i--;
    }
  }
}
// deleteItemByName(stationeryStore);

function sortbyPriceMaxMin(item) {
  item.sort((a, b) => b.price - a.price);
  return item;
}
// console.log(sortbyPriceMaxMin(stationeryStore));

function sortbyPriceMinMax(item) {
  item.sort((a, b) => a.price - b.price);
  return item;
}
// console.log(sortbyPriceMinMax(stationeryStore));

function sortMinMaxFilter() {
  let operation;
  do {
    operation = +prompt(`Choose your operation:
    1. Sort this maximum to minimum
    2. Sort this minimum to maximum`);
  } while (
    operation > 2 ||
    operation < 1 ||
    !isFinite(parseFloat(operation)) ||
    isNaN(operation)
  );
  if (operation === 1) {
    let item = filterCategory(stationeryStore);
    console.log(filterPrice(sortbyPriceMaxMin(item)));
  } else if (operation === 2) {
    let item = filterCategory(stationeryStore);
    console.log(filterPrice(sortbyPriceMinMax(item)));
  }
}
// sortMinMaxFilter(stationeryStore);

function calcSumByFilterArr(item) {
  let sum = filterPriceOrCategory(item);
  calcSumByKey(sum);
}
// calcSumByFilterArr(stationeryStore);
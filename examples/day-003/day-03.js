// Store the item's price as a number.
const itemPrice = 24;
// Store the most the customer is willing to spend.
const budget = 30;
// Store the number of these items available to buy.
const quantityInStock = 4;

// Compare price with budget; <= includes the case where they are equal.
const isWithinBudget = itemPrice <= budget;
// Check whether at least one item is available.
const isInStock = quantityInStock > 0;
// && is true only when both the budget and stock checks are true.
const canPurchase = isWithinBudget && isInStock;

// Print the budget comparison so its boolean value is visible.
console.log(`Within budget: ${isWithinBudget}`);
// Print the stock comparison so its boolean value is visible.
console.log(`In stock: ${isInStock}`);
// Print the combined result of both checks.
console.log(`Can purchase: ${canPurchase}`);

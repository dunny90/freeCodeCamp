/*
Traveling Shopper
Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:

Currency	1 Unit Equals
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.
*/

buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]])     // should return "Buy the first 2 items.".
buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]])                       // should return "Buy them all!".
buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]])         // should return "Buy the first 3 items.".
buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]])               // should return "Buy them all!".
buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]])        // should return "Buy the first 5 items.".

function buyItems(funds, items) {

    // Extract the budget
    let budget = funds[0];
    // Get the exchange rate for the currency of the budget
    let exchangeRate = getExchangeRate(funds[1]);


    // Get the budget in USD
    if(funds[1] != "USD") {
        budget = convertToUSD(budget, exchangeRate);
    }

    // To keep track of what budget we have left
    let remainingBudget = budget;
    // to keep track of how many items we've purchased
    let purchaseCounter = 0;
    let itemValue;
    
    // Now we have the budget in USD, loop through the items to buy
    for(let i = 0; i < items.length; i++) {

        // If the item isn't in USD, convert it
        if(items[i][1] != "USD") {
            exchangeRate = getExchangeRate(items[i][1]);
            itemValue = convertToUSD(items[i][0], exchangeRate);
        } else {
            itemValue = items[i][0];
        }

        // Subtract value from remaining budget
        remainingBudget -= itemValue;

        // If we still have budget left, increment the purchase counter
        if(remainingBudget > 0) {
            purchaseCounter++;
        } else {
            // No more budget left
            break;
        }

    }

    // Construct the result string
    let result = "";

    if(purchaseCounter != items.length) {
        result = "Buy the first " + purchaseCounter + " items."
    } else {
        result = "Buy them all!"
    }

    console.log(result);

  return result;
}

// Return the exchange rate for a given currency
function getExchangeRate(currency) {

    let exchangeRates = [{  currency : "USD",
                        exchange : 1.00
                    },
                    {   currency : "EUR",
                        exchange : 1.10
                    },
                    {   currency : "GBP",
                        exchange : 1.25
                    },
                    {   currency : "JPY",
                        exchange : 0.0070
                    }, 
                    {   currency : "CAD",
                        exchange : 0.75
                    }];
    
    let exchangeRate = 0;

    for(let i = 0; i < exchangeRates.length; i++) {
        
        if(exchangeRates[i].currency == currency) {
            exchangeRate = exchangeRates[i].exchange;
            break;
        }
    }

    return exchangeRate;
}

// Convert an amount to USD
function convertToUSD(amount, exchangeRate) {

    amount = amount * exchangeRate;

    return amount;
}
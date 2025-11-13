/*
Tip Calculator
Given the price of your meal and a custom tip percent, return an array with three tip values; 15%, 20%, and the custom amount.

Prices will be given in the format: "$N.NN".
Custom tip percents will be given in this format: "25%".
Return amounts in the same "$N.NN" format, rounded to two decimal places.
For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
*/

calculateTips("$10.00", "25%") // should return ["$1.50", "$2.00", "$2.50"].
calculateTips("$89.67", "26%") // should return ["$13.45", "$17.93", "$23.31"].
calculateTips("$19.85", "9%") // should return ["$2.98", "$3.97", "$1.79"].

function calculateTips(mealPrice, customTip) {

  // Get rid of the dollar sign
  let mealPriceNumber = Number(mealPrice.replace("$", ""));
  
  // Get rid of the percentage sign
  let customTipNumber = Number(customTip.replace("%", ""));
  
  // Array to store the tips to return
  let tipArray = [];
  
  // Array to store the default percentages plus the custom one
  let tipPercentages = [15, 20];
  tipPercentages.push(customTipNumber)
  
  for(let i = 0; i < tipPercentages.length; i++) {
    // Work out the tip and push to the array
    let tip = (mealPriceNumber/100) * tipPercentages[i];
    
    // Add the formatting
    tip = "$" + tip.toFixed(2);
    tipArray.push(tip);
  }
  
  return tipArray;
}

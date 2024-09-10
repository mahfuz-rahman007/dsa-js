var maxProfit = function(prices) {

    let min_index = 0;
    let max_index = 1;
    let max_profit = 0;
    
    while(max_index < prices.length) {

        if((prices[max_index] - prices[min_index]) < 0) {
            min_index = max_index;
        } else {
            max_profit = Math.max((prices[max_index] - prices[min_index]), max_profit);
        }
        max_index++;
    }

    return max_profit;
};

// console.log(maxProfit([7,1,5,3,6,4])); // 6-1 = 5
console.log(maxProfit([7,6,4,3,1]));// 0
// console.log(maxProfit([2,4,1]));// 2
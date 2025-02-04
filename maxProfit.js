prices = [7, 1, 2, 3, 1, 4, 5]
var maxProfit = function (prices) {
    profit = 0
    temp = prices[0]
    priftTakinPrice 
    for (let i = 1; i < prices.length; i++) {

        if(prices[i]<temp){
            if(!priftTakinPrice || priftTakinPrice >price[i])
            priftTakinPrice = prices[i]
        }

    }

    return profit
};
console.log('maxProfit(', maxProfit(prices))


// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 121. 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let benifit = 0;
    if (prices.length && prices.length > 0) {
        let minPrice = prices[0];
        for (let i = 1; i < prices.length; i++) {
            benifit = Math.max(benifit, prices[i] - minPrice);
            minPrice = Math.min(minPrice, prices[i]);
        }
    }
    return benifit;
};

// 股票只能当天买，后一天卖，所以我们只需要维护最小买入价和最大利润即可
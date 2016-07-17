"use strict";
var FinancialUtil = (function () {
    function FinancialUtil() {
    }
    FinancialUtil.getMonthlyRepayment = function (total, interestRate, years, deposit) {
        var interestRate = interestRate / 100;
        var loanAmount = total - deposit, months = years * 12, monthlyInterestRate = interestRate / 12, monthlyRepayment = loanAmount * Math.pow(1 + monthlyInterestRate, months) * monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, months) - 1);
        return monthlyRepayment;
    };
    return FinancialUtil;
}());
exports.FinancialUtil = FinancialUtil;
//# sourceMappingURL=utils.js.map
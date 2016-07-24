"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FinancialUtil_1 = require("./FinancialUtil");
var FinancialCalculatorComponent = (function () {
    function FinancialCalculatorComponent() {
        this.totalValue = 0;
        this.depositValue = 0;
        this.term = 5;
        this.interestRate = 10.5;
        this.levies = 1500;
        this.rent = 0;
        this.monthlyRepayment = 0;
        this.totalInterest = 0;
        this.totalCost = 0;
        this.totalMonthlyWorst = 0;
        this.totalMonthlyBest = 0;
        this.totalCostAfterTermWorst = 0;
        this.totalCostAfterTermBest = 0;
    }
    FinancialCalculatorComponent.prototype.calculateRepayment = function () {
        this.monthlyRepayment = FinancialUtil_1.FinancialUtil.getMonthlyRepayment(this.totalValue, this.interestRate, this.term, this.depositValue);
        var loanAmount = this.totalValue - this.depositValue;
        var loanTotal = this.monthlyRepayment * 12 * this.term;
        this.totalInterest = loanTotal - loanAmount;
        this.totalCost = loanTotal + this.depositValue;
        this.totalMonthlyWorst = this.monthlyRepayment + this.levies;
        this.totalMonthlyBest = this.monthlyRepayment + this.levies - this.rent;
        this.totalCostAfterTermWorst = this.totalMonthlyWorst * 12 * this.term + this.depositValue;
        this.totalCostAfterTermBest = this.totalMonthlyBest * 12 * this.term + this.depositValue;
        this.totalCostAfterTermAverage = (this.totalCostAfterTermWorst + this.totalCostAfterTermBest) / 2;
    };
    FinancialCalculatorComponent = __decorate([
        core_1.Component({
            selector: 'financialCalc',
            template: "\n\t\tTotal value: <input type=\"number\" [(ngModel)]=\"totalValue\"/>\n\t\t<br>\n\t\tDeposit: <input type=\"number\" [(ngModel)]=\"depositValue\"/>\n\t\t<br>\n\t\tYears: <input type=\"number\" [(ngModel)]=\"term\"/>\n\t\t<br>\n\t\tInterest rate: <input type=\"number\" [(ngModel)]=\"interestRate\"/>\n\t\t<br>\n\t\tLevies and rates: <input type=\"number\" [(ngModel)]=\"levies\"/>\n\t\t<br>\n\t\tRent rate: <input type=\"number\" [(ngModel)]=\"rent\"/>\n\t\t<br>\n\t\t<input type=\"button\" value=\"click\" (click)=\"calculateRepayment()\"/>\n\t\t<br>\n\t\t<br>\n\t\tMonthly repayment: <input type=\"number\" value={{monthlyRepayment}}>\n\t\t<br>\n\t\tTotal interest: <input type=\"number\" value={{totalInterest}}>\n\t\t<br>\n\t\tTotalCost: <input type=\"number\" value={{totalCost}}>\n\t\t<br>\n\t\t<br>\n\t\tTotal monthly cost (worst): <input type=\"number\" value={{totalMonthlyWorst}}>\n\t\t<br>\n\t\tTotal monthly cost (best): <input type=\"number\" value={{totalMonthlyBest}}>\n\t\t<br>\n\t\t<br>\n\t\tTotal cost after term (worst): <input type=\"number\" value={{totalCostAfterTermWorst}}>\n\t\t<br>\n\t\tTotal cost after term (best): <input type=\"number\" value={{totalCostAfterTermBest}}>\n\t\t<br>\n\t\tTotal cost after term (average): <input type=\"number\" value={{totalCostAfterTermAverage}}>\n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], FinancialCalculatorComponent);
    return FinancialCalculatorComponent;
}());
exports.FinancialCalculatorComponent = FinancialCalculatorComponent;
//# sourceMappingURL=financialCalculator.component.js.map
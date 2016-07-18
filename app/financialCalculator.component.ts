import {Component} from '@angular/core';
import {FinancialUtil} from "./FinancialUtil";

@Component({
	selector: 'financialCalc',
	template: `
		Total value: <input type="number" [(ngModel)]="totalValue"/>
		<br>
		Deposit: <input type="number" [(ngModel)]="depositValue"/>
		<br>
		Years: <input type="number" [(ngModel)]="term"/>
		<br>
		Interest rate: <input type="number" [(ngModel)]="interestRate"/>
		<br>
		Levies and rates: <input type="number" [(ngModel)]="levies"/>
		<br>
		Rent rate: <input type="number" [(ngModel)]="rent"/>
		<br>
		<input type="button" value="click" (click)="calculateRepayment()"/>
		<br>
		<br>
		Monthly repayment: <input type="number" value={{monthlyRepayment}}>
		<br>
		Total interest: <input type="number" value={{totalInterest}}>
		<br>
		TotalCost: <input type="number" value={{totalCost}}>
		<br>
		<br>
		Total monthly cost (worst): <input type="number" value={{totalMonthlyWorst}}>
		<br>
		Total monthly cost (best): <input type="number" value={{totalMonthlyBest}}>
		<br>
		<br>
		Total cost after term (worst): <input type="number" value={{totalCostAfterTermWorst}}>
		<br>
		Total cost after term (best): <input type="number" value={{totalCostAfterTermBest}}>
		`
})

export class FinancialCalculatorComponent {
	totalValue:number = 0;
	depositValue:number = 0;
	term:number = 5;
	interestRate:number = 10.5;
	levies:number = 1500;
	rent:number = 0;

	monthlyRepayment:number = 0;
	totalInterest:number = 0;
	totalCost:number = 0;

	totalMonthlyWorst = 0;
	totalMonthlyBest = 0;

	totalCostAfterTermWorst:number = 0;
	totalCostAfterTermBest:number = 0;

	calculateRepayment():void {

		this.monthlyRepayment = FinancialUtil.getMonthlyRepayment(this.totalValue, this.interestRate, this.term, this.depositValue);

		let loanAmount = this.totalValue - this.depositValue;
		let loanTotal = this.monthlyRepayment * 12 * this.term;

		this.totalInterest = loanTotal - loanAmount;
		this.totalCost = loanTotal + this.depositValue;

		this.totalMonthlyWorst = this.monthlyRepayment + this.levies;
		this.totalMonthlyBest = this.monthlyRepayment + this.levies - this.rent;

		this.totalCostAfterTermWorst = this.totalMonthlyWorst * 12 * this.term + this.depositValue;
		this.totalCostAfterTermBest = this.totalMonthlyBest * 12 * this.term + this.depositValue;
	}
}
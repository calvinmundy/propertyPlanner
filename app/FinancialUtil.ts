export class FinancialUtil {
	static getMonthlyRepayment(total:number, interestRate:number, years:number, deposit:number) : number {
        var interestRate:number = interestRate / 100;
        var loanAmount:number = total - deposit
          , months:number = years * 12
          , monthlyInterestRate:number = interestRate / 12
          , monthlyRepayment:number = loanAmount * Math.pow(1 + monthlyInterestRate, months) * monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, months) - 1);
        return monthlyRepayment;
    }
}
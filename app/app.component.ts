import {Component} from '@angular/core';
import {FinancialCalculatorComponent} from './financialCalculator.component';

@Component({
	selector: 'my-app',
	template: '<financialCalc></financialCalc>',
	directives: [FinancialCalculatorComponent]
})
export class AppComponent {

}
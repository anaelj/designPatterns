import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class CEOBudgetHandler extends BaseBudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO tratou o orçamento');
    budget.approved = true;
    return budget;
  }
}

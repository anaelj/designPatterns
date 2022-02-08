import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class SellBudgetHandler extends BaseBudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log('O vendedor tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handler(budget);
  }
}

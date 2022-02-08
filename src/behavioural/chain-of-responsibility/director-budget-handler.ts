import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50000) {
      console.log('O diretor tratou o orçamento');
      budget.approved = true;
      return budget;
    }
    return super.handler(budget);
  }
}

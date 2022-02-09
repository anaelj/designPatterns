import { CustomerBudget } from './customer-budget';
export abstract class BaseBudgetHandler {
  protected nextHandler: BaseBudgetHandler | null = null;

  handler(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler?.handler(budget);
    return budget;
  }

  setNextHandler(handler: BaseBudgetHandler): BaseBudgetHandler {
    this.nextHandler = handler;
    return handler;
  }
}

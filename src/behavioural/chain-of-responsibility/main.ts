import { CustomerBudget } from './customer-budget';
import { SellBudgetHandler } from './seller-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { DirectorBudgetHandler } from './director-budget-handler';
import { CEOBudgetHandler } from './ceo-budget-handler';

const customerBudget = new CustomerBudget(5001);
const seller = new SellBudgetHandler();

seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handler(customerBudget);
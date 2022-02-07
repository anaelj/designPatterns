import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderPending implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }
  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPayment(): void {
    console.log(`O pedido esta com situação pendente!`);
  }
  shipOrder(): void {
    console.log('Não é possível enviar pedido, pagamento pendente');
  }
}

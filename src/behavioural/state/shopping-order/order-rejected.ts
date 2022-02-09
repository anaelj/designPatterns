import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderReject';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log(`Não pode aprovar pagamento porque o pedido foi recusado!`);
  }
  rejectPayment(): void {
    console.log(`Não pode receusar o pedido porque ja está recusado`);
  }
  waitPayment(): void {
    console.log(`Não pode ficar pendente porque esta recusado`);
  }
  shipOrder(): void {
    console.log(`Não é possível enviar pedido recusado!`);
  }
}

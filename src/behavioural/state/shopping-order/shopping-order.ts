import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    console.log(`Estado do pedido: ${this.state.getName()}`);
    return this.state;
  }
  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`Estado do pedido: ${this.state.getName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }
  rejectPaymment(): void {
    this.state.rejectPayment();
  }
  waitPaymment(): void {
    this.state.waitPayment();
  }
  approvePaymment(): void {
    this.state.approvePayment();
  }
  shipOrder(): void {
    this.state.shipOrder();
  }
}

import { ShoppingOrder } from './shopping-order/shopping-order';
const order = new ShoppingOrder();
order.approvePaymment();
order.waitPaymment();
order.shipOrder();
order.rejectPaymment();
order.approvePaymment();
order.shipOrder();

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default class CartController extends Controller {
  @service shoppingCart;

  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get shipping() {
    return this.subtotal / 4;
  }

  get total() {
    return this.subtotal + this.shipping;
  }
}

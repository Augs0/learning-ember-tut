import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class CartController extends Controller {
  @service shoppingCart;

  get subtotal() {
    return this.shoppingCart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }
  get shipping() {
    return this.subtotal / 6;
  }

  get total() {
    return this.subtotal + this.shipping;
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
      document.querySelector('.warning').innerHTML = '';
    } else {
      item.count = 0;
      document.querySelector('.warning').innerHTML = 'No minus numbers allowed!'
    }
  }
}

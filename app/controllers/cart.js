import Controller from '@ember/controller';

export default class CartController extends Controller {
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

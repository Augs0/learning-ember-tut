import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class ProductDetailsComponent extends Component {
  @service shoppingCart;

  @action
  addToCart() {
    const { name, colours, colour, price } = this.args;
    this.shoppingCart.addItem({
      name,
      colour,
      image: colours.find(colourInfo => colourInfo.colour === colour).image,
      price: price.current
    });
  }
}

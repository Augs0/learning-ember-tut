import Component from '@glimmer/component';

export default class ProductComponent extends Component {
  productImage = this.args.product.colours[0].image;
}

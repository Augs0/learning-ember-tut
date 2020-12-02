import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object"

export default class ItemController extends Controller {
  @tracked colour = this.model.colours[0].colour;
  @tracked isZoomed = false;
  get productImage() {
    return this.model.colours.find(({ colour }) => colour === this.colour).image;

  }

  @action
  onChangeColour(newColour) {
    this.colour = newColour;
  }
  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}

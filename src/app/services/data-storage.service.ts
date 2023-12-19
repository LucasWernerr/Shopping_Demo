import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  public shoppingCard: any = [];
  public shoppingCardChange: Subject<boolean> = new Subject<boolean>();
  public selectedCategory: any = "";

  constructor() {}


  addToShoppingCard(product: any) {

    var productFromList = this.getProductFromList(product.id);

    if(productFromList == null) {

      var productToAdd = {
        counter: 1,
        productDetail: product
      }

      this.shoppingCard.push(productToAdd)
    }else {
      productFromList.counter++;
    }
    this.shoppingCardChange.next(this.shoppingCard);
  }

  removeFromShoppingCard(product: any) {


    var productFromList = this.getProductFromList(product.id);
    if(productFromList.counter == 1) {

      const index = this.shoppingCard.indexOf(productFromList, 0);
      if (index > -1) {
        this.shoppingCard.splice(index, 1);
      }
    }else {
      productFromList.counter--;
    }
    this.shoppingCardChange.next(this.shoppingCard);
  }

  getProductFromList(productId: string) {

    var product: any= null;

    this.shoppingCard.forEach((productShoppingCard: any) => {
      if(productShoppingCard.productDetail.id == productId) {
        product = productShoppingCard;
      }
    })

    return product;
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  public shoppingCard: any = [];
  public shoppingCardChange: Subject<boolean> = new Subject<boolean>();


  constructor() {}


  addToShoppingCard(product: any) {

    console.log("HIEr 1")

    var productFromList = this.getProductFromList(product.id);
    console.log("productFromList")

    console.log(productFromList)
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

    console.log("HIEr 2")
  }

  removeFromShoppingCard(product: any) {

    console.log("HIEr 1")

    var productFromList = this.getProductFromList(product.id);
    console.log("productFromList")

    console.log(productFromList)
    if(productFromList == null) {

      var productToAdd = {
        counter: 1,
        productDetail: product
      }

      this.shoppingCard.push(productToAdd)
    }else {
      productFromList.counter--;
    }
    this.shoppingCardChange.next(this.shoppingCard);

    console.log("HIEr 2")
  }

  getProductFromList(productId: string) {

    var product: any= null;

    this.shoppingCard.forEach((productShoppingCard: any) => {
      console.log(productShoppingCard)
      console.log(productShoppingCard.productDetail.id + " - " + productId)
      if(productShoppingCard.productDetail.id == productId) {
        product = productShoppingCard;
      }
    })

    return product;
  }
}

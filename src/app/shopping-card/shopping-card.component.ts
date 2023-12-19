import { Component } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent {

  public shoppingCard: any = [];
  public _shoppingCardSubscription: any;


  constructor(private dataStorage: DataStorageService) {

    this._shoppingCardSubscription = dataStorage.shoppingCardChange.subscribe((value) => {
      console.log("ÄNDERUNG")
      this.shoppingCard = value;
      console.log(this.shoppingCard)
  })
  }

  removeOne(product: any) {
    this.dataStorage.removeFromShoppingCard(product);
  }


  addOne(product: any) {
    this.dataStorage.addToShoppingCard(product);
  }


}

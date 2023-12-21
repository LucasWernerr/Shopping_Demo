import { Component } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.css'
})
export class ShoppingCardComponent {

  //Variablen-Definition
  public shoppingCard: any = [];
  public _shoppingCardSubscription: any;


  constructor(private dataStorage: DataStorageService) {
    this.shoppingCard = dataStorage.shoppingCard;
    this._shoppingCardSubscription = dataStorage.shoppingCardChange.subscribe((value) => {
      this.shoppingCard = value;
    })
  }

  /**
   * Reduziert die Anzahl der Produkte im Warenkorb
   * @param product 
   */
  removeOne(product: any) {
    this.dataStorage.removeFromShoppingCard(product);
  }


  /**
   * Zählt die Anzahl der Produkte im Warenkorb hoch
   * @param product 
   */
  addOne(product: any) {
    this.dataStorage.addToShoppingCard(product);
  }


}

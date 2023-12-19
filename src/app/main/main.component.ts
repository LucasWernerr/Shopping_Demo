import { Component } from '@angular/core';
import { DataRequestService } from '../services/data-request.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  products: any = [];
  productsLoaded: boolean = false;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  ];

  constructor(private dataRequestService: DataRequestService, private router: Router, private dataStorage: DataStorageService) {
    this.loadProducts();
  }

  async loadProducts() {

    (await this.dataRequestService.loadProducts()).subscribe(allProducts => {
      allProducts.forEach(product => {
        this.products.push(product);
      })

      this.productsLoaded = true;
    })

  }

  addProductToShoppingCard(product: any) {
    console.log("Zu Einkaufswagen hinzufügen")
    this.dataStorage.addToShoppingCard(product);

  }

  openDetailPage(productId: string) {
    console.log("HIER")
    console.log(productId)
    this.router.navigate(["/productDetail", productId])
  }
}

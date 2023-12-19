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

  public products: any = [];
  public productsLoaded: boolean = false;
  public categories: any = ["None"];
  public selectedCategory: any = "";

  constructor(private dataRequestService: DataRequestService, private router: Router, private dataStorage: DataStorageService) {
    if(this.dataStorage.selectedCategory !== "") {
      this.selectedCategory = this.dataStorage.selectedCategory;
    }

    this.loadProducts();
  }

  async loadProducts() {
    this.productsLoaded = false;
    this.products = [];
    (await this.dataRequestService.loadProducts()).subscribe(allProducts => {
      allProducts.forEach(product => {

        if(this.selectedCategory == "None" || this.selectedCategory == "") {
          this.products.push(product);
        }else {
          if(this.selectedCategory == product.category) {
            this.products.push(product);
          }
        }



        if(this.categories.indexOf(product.category) == -1) {
          this.categories.push(product.category)
        }
      })

      this.productsLoaded = true;
    })

  }

  addProductToShoppingCard(product: any) {
    this.dataStorage.addToShoppingCard(product);

  }

  openDetailPage(productId: string) {
    this.router.navigate(["/productDetail", productId])
  }

  filterProducts(selectedCategory: any) {
    this.selectedCategory = selectedCategory;
    this.dataStorage.selectedCategory = selectedCategory;
    this.loadProducts();
  }
}

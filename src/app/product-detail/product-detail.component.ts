import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataRequestService } from '../services/data-request.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  public productId: string | null = null;
  public productLoaded: boolean = false;
  public product: any = null;

  constructor(private route: ActivatedRoute, private dataRequestService: DataRequestService, private dataStorage: DataStorageService) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  async loadProduct() {

    (await this.dataRequestService.loadProducts()).subscribe(allProducts => {
      allProducts.forEach(product => {
        if(product.id == this.productId) {
          this.product = product;
        }
      })

      this.productLoaded = true;
    })

  }

  addProductToShoppingCard(product: any) {
    this.dataStorage.addToShoppingCard(product);

  }
}

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

  //Variablen-Definition
  public productId: string | null = null;
  public productLoaded: boolean = false;
  public product: any = null;

  constructor(private route: ActivatedRoute, private dataRequestService: DataRequestService, private dataStorage: DataStorageService) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  /**
   * Funktion lädt die Produkte und ermittelt die Produktdetails
   */
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

  /**
   * Funktion fügt ein Produkt zum Warenkorb hinzu
   * @param product : any - Produkt, welches als Objekt übergeben wird
   */
  addProductToShoppingCard(product: any) {
    this.dataStorage.addToShoppingCard(product);
  }
}

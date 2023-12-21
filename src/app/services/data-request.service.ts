import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  private urlUser: string = "https://fakestoreapi.com/users";
  private urlProducts: string = "https://fakestoreapi.com/products";


  /**
   * Ermittelt die Benutzer
   * @returns 
   */
  getUsers():Observable<any[]> {



    var users = null;
    return this.http.get<any[]>(this.urlUser);
  }

  /**
   * Ermittelt die Produkte
   * @returns 
   */
  async loadProducts() {

    var users = null;
    return this.http.get<any[]>(this.urlProducts);
  }

}

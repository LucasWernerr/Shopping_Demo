import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  private urlUser: string = "https://fakestoreapi.com/users";
  private urlProducts: string = "https://fakestoreapi.com/products";


  async getUsers() {

    var users = null;
    return this.http.get<any[]>(this.urlUser);
  }

}

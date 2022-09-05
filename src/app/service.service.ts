import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "https://restcountries.com/v3.1/all";
  
  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get(this.url);
  }
}

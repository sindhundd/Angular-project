import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private httpClient:HttpClient) { }

  getImage(image:string){
    return this.httpClient.get('https://pixabay.com/api/?username=mjweaver01&key=1631539-db8210cabd2636c6df59812df&q='+image+'&image_type=photo')
  }
}

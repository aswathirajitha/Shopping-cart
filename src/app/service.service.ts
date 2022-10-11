import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  cartlist : any =[];
  buylist : any =[];

  url  =" http://localhost:3000/bag"
  url2 =" http://localhost:3000/book"
  url3 =" http://localhost:3000/sanitizer"
  constructor(private http :HttpClient) { }


  getallbag(){
    return this.http.get(this.url) 
   }

   getallbook(){
    return this.http.get(this.url2) 
   }
   getallsan(){
    return this.http.get(this.url3) 
   }

  getproduct(){
    return this.cartlist;
  }

  setproduct(prod :any){
    this.cartlist.push(prod);
   
  }

  get(){
    return this.buylist;
  }

  set(prod :any){
    this.buylist.push(prod);
   
  }
  
  length(){
    return this.cartlist.length
  }
}

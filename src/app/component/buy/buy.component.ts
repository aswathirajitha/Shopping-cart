import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  buy : any =[];
 
  constructor(private api:ServiceService) { }

  ngOnInit(): void {
    this.buy=this.api.get()
  }

  del(id:number)
  { 
    const indexOfObject = this.buy.findIndex((object: { id: number; }) => {
      return object.id === id;
      
    });
    console.log(indexOfObject)
  
  if (indexOfObject !== -1) {
    this.buy.splice(indexOfObject, 1);
  } 
  console.log(this.buy);
  }
}
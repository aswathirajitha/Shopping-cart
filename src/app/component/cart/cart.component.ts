import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : any =[];
  dis: any="";
  tot : any;
  constructor(private api:ServiceService) { }

  ngOnInit(): void {  
    this.cart=this.api.getproduct()  
  }

  min(item:any){

    if(item.type == "b3"){
      if(item.quantity !> 10 ){
        console.log(item.quantity)
        item.quantity=item.quantity-1 
      } 
    }
    else if(item.type == "b2"){
      if(item.quantity !>3 ){
        console.log(item.quantity)
        item.quantity=item.quantity-1 
      } 
    }
     else if(item.type != "b2" && item.type != "b2" && item.quantity!=1)
    {
    item.quantity=item.quantity-1;  
    }
  }
  plus(item:any){
    
    if(item.type == "b1"){
      if(item.quantity !< 2 ){
        console.log(item.quantity)
        item.quantity=item.quantity+1 
      } 
    }
    else
    {
    item.quantity=item.quantity+1 
    }


}


buy(item:any){

  this.tot =item.price * item.quantity

  if(item.type == "b2"){
    if(this.tot >= 500){
    item.disamt =this.tot -( item.discount * this.tot)
     console.log(item.disamt)}
     else{item.disamt = item.price * item.quantity}
  }

  else if(item.type == "b3"){
    if(this.tot >= 3000){
     
      item.disamt = this.tot -100
    } else{item.disamt = item.price * item.quantity}
  }

  else if(item.type =="b1")
    {
      item.disamt = item.price * item.quantity
      console.log(item.disamt)
    }

    this.api.set(item)
}

}

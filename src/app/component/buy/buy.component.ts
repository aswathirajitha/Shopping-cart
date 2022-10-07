import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  buy : any =[];

  // p : any;
  // q : any;
  // t :any;
  // tot :any;
  // dis :any;
  // d :any;

  // netamt : any;
  
  constructor(private api:ServiceService) { }

  

  ngOnInit(): void {
    this.buy=this.api.get()
  }
//   var i : any;
  
//   for(i in this.buy)

//    this.p=this.buy[i].price
//    this.q=this.buy[i].quantity
//    this.t=this.buy[i].type
//    this.d =this.buy[i].discount
//    this.dis =this.buy[i].disamt

//     this.tot =this.buy[i].price * this.buy[i].quantity


//     if(this.t == "b2"){
//       if(this.tot >= 500)
//       this.buy[i].disamt =this.tot -( this.d * this.tot)
//        console.log(this.buy[i].disamt)
//     }

//     else if(this.t == "b3"){
//       if(this.tot >= 3000){
       
//         this.buy[i].disamt = this.tot -100
//       }
//     }

//     else if(this.t =="b1")
//     {
//       this.buy[i].disamt = this.tot
//     }

//     console.log(this.buy[i])

//     this.netamt = this.netamt+this.buy[i].disamt 
//     console.log(this.netamt)
//   }
// 
  }

import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  bag :any=[];

  constructor(private api:ServiceService) { }

  add(item:any){
    this.api.setproduct(item)
    console.log(item)
  }
  ngOnInit(): void {
    this.get()
  }
  get()
  {
    this.api.getallbag().subscribe
    (
      res=>
      this.bag=res  
    ) 

  }

}

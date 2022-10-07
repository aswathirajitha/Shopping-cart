import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book :any=[];
  
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
      this.api.getallbook().subscribe
      (
        res=>this.book=res  
      ) 
  
    }

}

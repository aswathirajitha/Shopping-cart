import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-sanitizer',
  templateUrl: './sanitizer.component.html',
  styleUrls: ['./sanitizer.component.css']
})
export class SanitizerComponent implements OnInit {

  sanitizer :any=[];

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
      this.api.getallsan().subscribe
      (
        res=>
        this.sanitizer=res  
      ) 
  
    }
  
  }
  
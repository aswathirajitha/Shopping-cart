import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  len : number=0;
  constructor(private api:ServiceService) { }

  ngOnInit(): void {
    this.len=this.api.length()  
    console.log(this.len)
  }

}

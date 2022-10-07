import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component'
import { BodyComponent } from './component/body/body.component';
import { BagComponent } from './component/bag/bag.component';
import { BookComponent } from './component/book/book.component';
import { SanitizerComponent } from './component/sanitizer/sanitizer.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { BuyComponent } from './component/buy/buy.component';

const routes: Routes = [

  {path:'',component:BodyComponent},
  {path:'Login',component:LoginComponent},
  {path:'bag',component:BagComponent},
  {path:'book',component:BookComponent},
  {path:'SANITIZER',component:SanitizerComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent,
  children:[
      {path:'buy',component:BuyComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

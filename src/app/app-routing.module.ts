import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { HomeComponent } from './home/home.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'postapi', component: ApiComponent },
  { path: 'form', component: FormdemoComponent },
  { path: 'secondform', component: SecondformComponent },
  { path: 'thirdform', component: ThirdformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

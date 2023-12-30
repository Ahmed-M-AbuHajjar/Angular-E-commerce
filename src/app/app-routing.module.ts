import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HideNavFooterGuard } from './hide-nav-and-footer.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ElementsComponent } from './elements/elements.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent, title:'home'},
  {path:'blog',component:BlogComponent, title:'blog'},
  {path:'elements',component:ElementsComponent, title:'elements'},
  {path:'login',component:LoginComponent, title:'login',canActivate: [HideNavFooterGuard],canDeactivate:[HideNavFooterGuard]},
  {path:'register',component:RegisterComponent, title:'register',canActivate: [HideNavFooterGuard],canDeactivate:[HideNavFooterGuard]},
  {path:'forgotpassword',component:ForgotpasswordComponent,title:'forgot password',canActivate: [HideNavFooterGuard],canDeactivate:[HideNavFooterGuard]},
  {path:'pages',component:PagesComponent, title:'pages'},
  {path:'shop',component:ShopComponent, title:'shop'},
  {path:'**', component:PagenotfoundComponent, title:'error page',canActivate: [HideNavFooterGuard],canDeactivate:[HideNavFooterGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

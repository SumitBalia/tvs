import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import {UserloginService} from './userlogin.service';

const routes: Routes = [
  {'path':'', 'redirectTo':'/login', 'pathMatch':'full'},
  {'path':'login', 'component':LoginComponent},
  {'path':'users', 'component':UserListComponent},
  {'path':'users/:userName', 'component':UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ChartModule
  ],
  providers: [UserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

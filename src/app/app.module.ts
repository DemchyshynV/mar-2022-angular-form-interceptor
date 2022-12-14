import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MainInterceptor} from './main.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

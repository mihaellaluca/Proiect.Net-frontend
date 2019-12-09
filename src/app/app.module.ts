import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { TechItemComponent } from './components/tech-item/tech-item.component';
import { MihneaComponent } from './components/mihnea/mihnea.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, HomeComponent, RegisterComponent, TechItemComponent, MihneaComponent, HeaderComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, NgbModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

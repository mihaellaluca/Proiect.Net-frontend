import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { TechItemComponent } from './components/tech-item/tech-item.component';
import { MihneaComponent } from './components/mihnea/mihnea.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectTabComponent } from './components/project-tab/project-tab.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { InvitationCardComponent } from './components/invitation-card/invitation-card.component';

import { UsersSuggestionsComponent } from './components/users-suggestions/users-suggestions.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserInvitationCardComponent } from './components/user-invitation-card/user-invitation-card.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		RegisterComponent,
		TechItemComponent,
		MihneaComponent,
		HeaderComponent,
		ProjectTabComponent,
		CreateProjectComponent,
		UsersSuggestionsComponent,
		ProjectPageComponent,
		UserProfileComponent,
    MyProjectsComponent,
    InvitationCardComponent,
    UserInvitationCardComponent 
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, NgbModule, HttpClientModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

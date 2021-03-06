import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [ AuthGuardService ]
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'create-project', component: CreateProjectComponent },
	{ path : 'my-projects', component: MyProjectsComponent},
	{ path: 'project-page/:id', component: ProjectPageComponent },
	{ path: 'user-profile/:id', component: UserProfileComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

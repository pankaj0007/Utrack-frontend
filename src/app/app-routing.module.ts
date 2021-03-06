import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuditlogComponent } from './auditlog/auditlog.component';
import { HomeComponent } from './home/home.component';
import { Declarations } from '@angular/language-service';


const routes:Routes=[

{
    path      :'home', 
    component : HomeComponent
},
{
    path      :'user', 
    component : UserComponent
},

{
     path      : 'login',
     component :  LoginComponent
},
{    
     path      : 'log', 
     component : AuditlogComponent
},

{
    path      : '',
    component : LoginComponent
},

]


@NgModule({
  imports :[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations :[]
})

export class AppRoutingModule{}
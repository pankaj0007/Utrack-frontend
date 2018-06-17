import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { Declarations } from '@angular/language-service';


const routes:Routes=[
{path :'user' , component : UserComponent},
{path :'login' , component : LoginComponent},
{path :'' , component : LoginComponent},
]


@NgModule({
  imports :[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations :[]
})

export class AppRoutingModule{}
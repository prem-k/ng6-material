import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent } from './register/register.component';
import {HomeComponent } from './home/home.component';
import {UsersComponent } from './users/users.component';

const routes : Routes = [
  { path: 'home',      component: HomeComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'register/:id',  component: RegisterComponent },
  { path: 'users',      component: UsersComponent },
  { path: '',          redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports : [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports : [
  	RouterModule,
  	BrowserModule
  ],
  declarations : [
    //RegisterComponent
  ]
})
export class AppRoutingModule {


}
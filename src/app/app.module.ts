import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'home', component: FirstPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    GamePageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

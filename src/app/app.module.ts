import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

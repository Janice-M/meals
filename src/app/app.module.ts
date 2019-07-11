import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    MealFormComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

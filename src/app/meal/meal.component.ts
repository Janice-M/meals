import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  
  meals= []
  addNewMeal(newEntry) {
    this.meals.push(newEntry)
  }
  deleteMeal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete meal?`)

      if (toDelete){
        this.meals.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  
  }
}

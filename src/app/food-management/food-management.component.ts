import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';

@Component({
  selector: 'app-food-management',
  templateUrl: './food-management.component.html',
  styleUrls: ['./food-management.component.css']
})
export class FoodManagementComponent implements OnInit {

  foodlist : Food[][] = [];

  foodCartItems : Food[] = [];

  constructor() { 

    this.foodlist = [[{
      foodId : "F001",
      foodName : "Vegetable Won Ton",
      foodImageUrl : "../assets/images/28.4v.jpg",
      foodPrice : 450.00,
      foodSelected : false
    },
    {
      foodId : "F002",
      foodName : "Vegetable Won Ton",
      foodImageUrl : "../assets/images/web_15_1.jpg",
      foodPrice : 350.00,
      foodSelected : false
    },
    {
      foodId : "F003",
      foodName : "Vegetable Won Ton",
      foodImageUrl : "../assets/images/web_18_1.jpg",
      foodPrice : 250.00,
      foodSelected : false
    }],
    [
    {
      foodId : "F004",
      foodName : "Vegetable Won Ton",
      foodImageUrl : "../assets/images/306.web.1_1_.jpg",
      foodPrice : 250.00,
      foodSelected : false
    }
  ]
  ]

  }

  ngOnInit() {
    localStorage.setItem('foodCardItems',JSON.stringify(this.foodCartItems))
    console.log('asasas');
  }

  addToCart(sourceFood : Food){
    sourceFood.foodSelected = !sourceFood.foodSelected;  
    this.foodCartItems.push(sourceFood);
    localStorage.setItem('foodCardItems',JSON.stringify(this.foodCartItems))
    console.log(this.foodCartItems.length);
  }

  removeFromCart(sourceFood : Food){
    sourceFood.foodSelected = !sourceFood.foodSelected;  
    const index = this.foodCartItems.indexOf(sourceFood);
    this.foodCartItems.splice(index, 1);
    console.log(this.foodCartItems.length)
    localStorage.setItem('foodCardItems',JSON.stringify(this.foodCartItems))
  }

}

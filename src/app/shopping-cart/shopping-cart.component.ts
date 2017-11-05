import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  foodCardItems : Food[]=[];
  constructor() { 
    if(localStorage.getItem('foodCardItems') != null){
      this.foodCardItems = JSON.parse(localStorage.getItem('foodCardItems'));
      console.log(this.foodCardItems)  
    }
  }

  ngOnInit() {
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.foodCardItems.forEach( (food) => {
      totalPrice = totalPrice +  food.foodPrice;
    })
    return "Rs. " + totalPrice.toFixed(2);
  }

}

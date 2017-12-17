import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoow : boolean=false;
  food : any;
  payment : any = {
    CardNumber : "",
    CVCNumber : "",
    CardHolderName : ""
  }
  foodCardItems : Food[]=[];
  constructor(private http: Http) { 
    if(localStorage.getItem('foodCardItems') != null){
      this.foodCardItems = JSON.parse(localStorage.getItem('foodCardItems'));
      console.log(this.foodCardItems)  
    }
  }

  cardPayment(){
    this.food = {
      UserId : "0444",
      Date : "2017/01/01",
      Address : "hhh",
      Foods : this.foodCardItems,
        PaymentType : "CREDIT",
        CardNumber : "",
        CVCNumber : "",
        CardHolderName : ""
    }
    this.food.CardNumber = this.payment.CardNumber;
    this.food.CardHolderName = this.payment.CardHolderName;
    this.food.CVCNumber = this.payment.CVCNumber;

    this.http.post("http://localhost:59731/api/food", this.food)
    .subscribe(
      res => {
        alert("Food Reserved")
        this.shoow =false;
      },
      err => {
        alert("Error occured");
        this.shoow =false;
      }
    );    
  }

  cashPayment(){
    this.food = {
      UserId : "0444",
      Date : "2017/01/01",
      Address : "hhh",
      Foods : this.foodCardItems,
        PaymentType : "CASH",
        CardNumber : "",
        CVCNumber : "",
        CardHolderName : ""
    }

    this.http.post("http://localhost:59731/api/food", this.food)
    .subscribe(
      res => {
        alert("Food Reserved")
        this.shoow =false;
      },
      err => {
        alert("Error occured");
        this.shoow =false;
      }
    );
  }
  
  purchaseItems(){
    this.shoow = true;
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

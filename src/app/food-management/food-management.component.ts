import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../Food';

@Component({
  selector: 'app-food-management',
  templateUrl: './food-management.component.html',
  styleUrls: ['./food-management.component.css']
})
export class FoodManagementComponent implements OnInit {

  foodlist : Food[][] = [];

  foodCartItems : Food[] = [];

  
  constructor(private http: HttpClient) { 

    this.http.get('http://localhost:59731/api/food').subscribe(data => {
      this.foodlist = this.splitUp(data, 1);
      console.log(this.foodlist);
    });
  }

 splitUp(arr, n) {
    var rest = arr.length % n,
        restUsed = rest,
        partLength = Math.floor(arr.length / n),
        result = [];
    
    for(var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
            add = false;
        
        if(rest !== 0 && restUsed) {
            end++;
            restUsed--;
            add = true;
        }
        
        result.push(arr.slice(i, end));
        
        if(add) {
            i++;
        }
    }
    
    return result;
}

  ngOnInit() {
    localStorage.setItem('foodCardItems',JSON.stringify(this.foodCartItems))
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

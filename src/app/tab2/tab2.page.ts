import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products = []

  constructor(private ShoppingService: ShoppingService, private navCtrl: NavController) {}

  ngOnInit(){
    this.ShoppingService.products.subscribe(products => {
      this.products = products.filter(p => {
        return !p.inMyCart
      })
    })
  }

  viewProduct(id){
    this.navCtrl.navigateForward("/products/" + id)
  }
  
  plus(e, id){
    e.stopPropagation()
    this.ShoppingService.addQuantity(parseInt(id))
  }

  minus(e, id){
    e.stopPropagation()
    this.ShoppingService.minusQuantity(parseInt(id))
  }

  addToCart(e, id){
    e.stopPropagation()
    this.ShoppingService.addToCart(parseInt(id))
  }

}

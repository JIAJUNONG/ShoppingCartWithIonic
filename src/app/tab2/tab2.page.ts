import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productlist = [];
  list = 0;
  list2 = 0;
  currentQty = 0;

  constructor(private shoppingService: ShoppingService, private actionSheetCtrl: ActionSheetController, private navCtrl: NavController) {}

  ngOnInit() {
    this.shoppingService.productlist.subscribe(productlist => {
      this.productlist = productlist;
    })



    this.shoppingService.onThatProduct.subscribe(idx => {
      this.list = this.shoppingService.productlist[idx].id;
    })
  }

  onNavigateToProductList(id){
    this.navCtrl.navigateForward("/product/" + id);
  }

  plus() {
    this.currentQty++;
  }

  minus(){
    this.currentQty--;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.page.html',
  styleUrls: ['./product-list-details.page.scss'],
})
export class ProductListDetailsPage implements OnInit {
  selectedProduct = null;

  constructor(private shoppingService: ShoppingService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get("productId");
    this.selectedProduct = this.shoppingService.productlist.getValue().filter(product => {
      return product.id === parseInt(productId)
    })[0]
  }

}

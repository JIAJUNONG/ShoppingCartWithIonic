import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list-details',
  templateUrl: './product-list-details.page.html',
  styleUrls: ['./product-list-details.page.scss'],
})
export class ProductListDetailsPage implements OnInit {
  selectedProduct = null

  constructor(private ShoppingService: ShoppingService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const productId = this.route.snapshot.params.productId
    this.ShoppingService.products.subscribe(products => {
      this.selectedProduct = products.filter(p => {
        return p.id === parseInt(productId)
      })[0]
    })

  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  onThatProduct = new BehaviorSubject<number>(0);
  productlist = new BehaviorSubject([
    {
      id: 1,
      imageUrl: 'https://tiddlywiki.com/favicon.ico',
      productName: 'Cat',
      qty: 1,
      price: 5,
      atCart: false
    },
    {
      id: 2,
      imageUrl: 'https://ps.w.org/ewww-image-optimizer/assets/icon-128x128.png',
      productName: 'Speed',
      qty: 2,
      price: 10,
      atCart: false
    },
    {
      id: 3,
      imageUrl: 'https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-unicorn-4a230c2064797b2aa08c12f522a6df8f6c9a0461839310c17ae01e5d95c6b67c.png',
      productName: 'Unicorn',
      qty: 3,
      price: 15,
      atCart: false
    }
  ]);


  constructor() { }

  updateSelectedList(idx: number) {
    this.onThatProduct.next(idx);
  }

  increaseQuantity(id: number){
    if (this.productlist[id].id === id) {
      //this.productlist.next(id);
    }
  }
}

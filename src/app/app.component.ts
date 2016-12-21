import { Component } from '@angular/core';

import { Product } from './product';
import { MdmProductService } from './mdm-product.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [MdmProductService]
})
export class AppComponent {

  products: Product[];

  constructor(private mdmProductService: MdmProductService) { }

  ngOnInit(): void {
    this.products = this.mdmProductService.getProducts();
  }
  
}

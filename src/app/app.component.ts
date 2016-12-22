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

  private products: Product[];

  public constructor(private mdmProductService: MdmProductService) { }

  private ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.mdmProductService.getProducts()
      .then(products => this.products = products);
  }
  
}

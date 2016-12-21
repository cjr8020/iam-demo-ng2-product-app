import { Component } from '@angular/core';
import { MdmProductService } from './mdm-product.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div id="content-area" class="col-md-9" role="main">
      <div id="content">
        <h1>ng2 Products App</h1>
        <!-- <alert type="success">Products</alert> -->
        <h2><span>Products</span></h2>
        <table class="table">
          <thead>
          <tr>
            <th>Product Listing</th>
          </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of products">
              <td>{{p}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  providers: [MdmProductService]
})
export class AppComponent {

  products: string[] = [
    "Life",
    "Dental",
    "Vision"
  ];

  constructor(private mdmProductService: MdmProductService) {
    
  }
}

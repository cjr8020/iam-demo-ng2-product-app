import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { ConfigService } from './shared/config.service';
import { PRODUCTS } from './mock-products';
import { Product } from './product';

@Injectable()
export class MdmProductService {

  constructor(private configService: ConfigService) { 
    console.log(`
      I'm MdmProductService, and I'm configured with ConfigService
      ConfigService.mdmProductServer: ${configService.mdmProductApiURL()}
    `);
  }

  getProducts(): Product[] {
    return PRODUCTS;
  }

}

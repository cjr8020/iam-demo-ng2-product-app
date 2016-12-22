import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConfigService } from './shared/config.service';
import { PRODUCTS } from './mock-products';
import { Product } from './product';

@Injectable()
export class MdmProductService {

  private mdmProductApiUrl: string;

  constructor(
      private configService: ConfigService,
      private http: Http
  ) { 
    console.log(`
      I'm MdmProductService, and I'm configured with ConfigService
      ConfigService.mdmProductServer: ${configService.mdmProductApiUrl()}
    `);
    this.mdmProductApiUrl = configService.mdmProductApiUrl();
  }

  public getProducts(): Promise<Product[]> {
    // return Promise.resolve(PRODUCTS);
    return this.http.get(this.mdmProductApiUrl)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}

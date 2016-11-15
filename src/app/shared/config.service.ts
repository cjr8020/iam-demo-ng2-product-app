import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {
  public production: boolean = environment.production;
  public mdmProductServer: string = environment.MDM_PRODUCT_SERVER;
  public mdmProductApi: string = environment.MDM_PRODUCT_API;

  public mdmProductApiURL(): string {
    return this.mdmProductServer + this.mdmProductApi;
  }
}

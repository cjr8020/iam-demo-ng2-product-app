import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private production: boolean = environment.production;
  private mdmProductServer: string = environment.MDM_PRODUCT_SERVER;
  private mdmProductApi: string = environment.MDM_PRODUCT_API;

  // public methods

  public mdmProductApiUrl(): string {
    return this.mdmProductServer + this.mdmProductApi;
  }

  public isProduction(): boolean {
    return this.production;
  }
}

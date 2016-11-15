import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {
  public static production: boolean = environment.production;
  public static mdmProductServer: string = environment.MDM_PRODUCT_SERVER;
  public static mdmProductApi: string = environment.MDM_PRODUCT_API;
}

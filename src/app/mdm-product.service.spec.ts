/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MdmProductService } from './mdm-product.service';

describe('Service: MdmProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdmProductService]
    });
  });

  it('should ...', inject([MdmProductService], (service: MdmProductService) => {
    expect(service).toBeTruthy();
  }));
});

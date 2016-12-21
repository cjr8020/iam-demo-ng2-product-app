import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AlertModule, AlertConfig } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ConfigService } from './shared/config.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule             // ng2-bootstrap
  ],
  providers: [ 
    AlertConfig,            // ng2-bootstrap
    ConfigService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() { }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CampanhaService } from './services/campanha.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ApoiadoresComponent } from './apoiadores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApoiadorService } from './services/apoiador.service';

@NgModule({
  declarations: [
    AppComponent,
    ApoiadoresComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    CampanhaService,
    ApoiadorService
  ],
  bootstrap: [DashboardComponent]
})
export class AppModule { }

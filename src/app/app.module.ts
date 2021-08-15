import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GoogleMapsModule} from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { from } from 'rxjs';
import { LogoComponent } from './logo/logo.component';
import { OnamaComponent } from './onama/onama.component';
import { SadrzajComponent } from './sadrzaj/sadrzaj.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PocetnaComponent,
    LogoComponent,
    OnamaComponent,
    SadrzajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

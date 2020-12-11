import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { OurWorkComponent } from "./our-work/our-work.component";

import { SlickCarouselModule } from "ngx-slick-carousel";
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    WhatwedoComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    OurWorkComponent,
    ContactComponent,
    CareerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

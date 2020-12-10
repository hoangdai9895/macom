import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { OurWorkComponent } from "./our-work/our-work.component";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "what-we-do",
    component: WhatwedoComponent,
  },
  {
    path: "about-us",
    component: AboutComponent,
  },
  {
    path: "our-work",
    component: OurWorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, Input, OnInit } from "@angular/core";
import { LayoutService } from "../services/layout.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @Input() toggle: () => void;
  public menu = [
    {
      title: "Home",
      routerLink: "",
    },
    {
      title: "What we do",
      routerLink: "/what-we-do",
    },
    {
      title: "Our work",
      routerLink: "/our-work",
    },
    {
      title: "About us",
      routerLink: "/about-us",
    },
    {
      title: "Career",
      routerLink: "",
    },

    {
      title: "Contact",
      routerLink: "",
    },
  ];

  constructor(public _layoutService: LayoutService) {}

  ngOnInit() {}

  public closeMenu = (): void => {
    //slideInRight
    document.querySelector(".menu-wrap").classList.remove("open");
    document.querySelector(".menu-wrap").classList.add("close");

    setTimeout(() => {
      this._layoutService.toggle();
    }, 1100);
  };
}

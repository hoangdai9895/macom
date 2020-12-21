import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-work",
  templateUrl: "./our-work.component.html",
  styleUrls: ["./our-work.component.scss"],
})
export class OurWorkComponent implements OnInit {
  public navs = [
    {
      title: "A.O.Smith Vietnam",
    },
    {
      title: "Midea",
    },
    {
      title: "Eurowindow",
    },
    {
      title: "Sacombank",
    },
  ];
  
  slides = [
    { img: "/assets/img/right-img.png" },
    { img: "/assets/img/right-img.png" },
    { img: "/assets/img/right-img.png" },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    prevArrow: "<img src='/assets/img/arr-left.png' class='arr-left'/>",
    nextArrow: "<img src='/assets/img/arr-right.png' class='arr-right'/>",
  };
  constructor() {}

  ngOnInit() {}
}

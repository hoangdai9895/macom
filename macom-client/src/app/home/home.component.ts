import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public flag: boolean;
  public isOpenMenu: boolean;
  constructor() {}

  ngOnInit() {
    window.addEventListener("scroll", () => {
      // window.pageYOffset >
      console.log(window.innerHeight);
      if (window.pageXOffset > window.innerHeight) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", () => {
      this.flag = false;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.onResize();
    setTimeout(() => {
      let div = document.querySelectorAll(".intro__main-content");
      for (let i = 0; i < div.length; i++) {
        div[i].classList.add("remove-fill-color");
      }
      // document.querySelector(".screen-1").classList.add("opacity-0");
    }, 7000);
  }

  private onResize = (): void => {
    document.getElementById("screen-2__big-cricle").style.width =
      (window.innerWidth * 8) / 10 + "px";
    document.getElementById("screen-2__big-cricle").style.height =
      (window.innerWidth * 8) / 10 + "px";
  };

  public toggle = (): void => {
    this.isOpenMenu = !this.isOpenMenu;
  };
}

import { Component } from "@angular/core";
import { LayoutService } from "./services/layout.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "macom-client";

  public toggle = (): void => {};
  constructor(public _layoutService: LayoutService) {}
}

import { Component, OnInit } from "@angular/core";
import { LayoutService } from "../services/layout.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public _layoutService: LayoutService) {}

  ngOnInit() {}

  public toggle = (): void => {};
}

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  public isToggle: boolean;

  constructor() {}

  public toggle = (): void => {
    console.log("222");

    this.isToggle = !this.isToggle;
  };
}

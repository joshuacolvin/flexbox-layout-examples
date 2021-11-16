import { Component } from "@angular/core";
import { PeakIconRegistry } from "@ascentgl/peak-icons";
import { peakIconBookmark } from "@ascentgl/peak-icons/icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private registry: PeakIconRegistry) {
    this.registry.register(peakIconBookmark);
  }

  flexDirection = ["row", "row-reverse", "column", "column-reverse"];
  flexDirectionValue = "row";

  flexWrap = ["nowrap", "wrap", "wrap-reverse"];
  flexWrapValue = "nowrap";

  justifyContent = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];

  justifyContentValue = "flex-start";

  alignItems = ["flex-start", "flex-end", "center", "stretch", "baseline"];
  alignItemsValue = "flex-start";

  alignSelf = ["auto", "flex-start", "flex-end", "center", "stretch"];
  alignSelfValue = "auto";

  flexBasis = ["auto", 0, "200px"];
  flexBasisValue = "auto";
}

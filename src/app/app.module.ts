import { PeakButtonModule, PeakCardModule } from "@ascentgl/peak-ui";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { PeakIconModule } from "@ascentgl/peak-icons";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PeakButtonModule,
    PeakCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    PeakIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

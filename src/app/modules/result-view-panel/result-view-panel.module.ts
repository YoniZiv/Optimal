import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultViewPanelComponent } from "./result-view-panel.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ResultViewPanelComponent],
  imports: [CommonModule, BrowserModule, MatCardModule],
  exports: [ResultViewPanelComponent]
})
export class ResultViewPanelModule {}

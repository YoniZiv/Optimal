import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchPanelComponent } from "./search-panel.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [SearchPanelComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [SearchPanelComponent]
})
export class SearchPanelModule {}

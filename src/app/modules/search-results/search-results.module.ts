import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchResultsComponent } from "./search-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, BrowserModule, MatButtonModule],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule {}

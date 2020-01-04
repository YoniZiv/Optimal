import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SearchPanelModule } from "./modules/search-panel/search-panel.module";
import { SearchResultsModule } from "./modules/search-results/search-results.module";
import { ResultViewPanelModule } from "./modules/result-view-panel/result-view-panel.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SearchPanelModule,
    SearchResultsModule,
    ResultViewPanelModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

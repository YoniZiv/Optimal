import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public results = [];
  public selectedAnswer = {};
  title = "optimal";

  buildResultBlocks(results) {
    this.results = results;
  }

  displayAnswer(ans) {
    this.selectedAnswer = ans;
  }
}

import { Component, OnInit, Input, SimpleChanges, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  @Input() results = [];
  @Output() onAnswerClicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  displayAnswer(ans) {
    this.onAnswerClicked.emit(ans);
  }
}

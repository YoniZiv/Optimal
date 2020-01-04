import { Component, OnInit, Input, SimpleChanges, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Result } from 'src/app/interfaces/Result';

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  @Input() results : Result[] = [] ;
  @Output() onAnswerClicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  displayAnswer(ans: Result) {
    this.onAnswerClicked.emit(ans);
  }
}

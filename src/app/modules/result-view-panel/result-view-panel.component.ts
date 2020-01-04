import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-result-view-panel",
  templateUrl: "./result-view-panel.component.html",
  styleUrls: ["./result-view-panel.component.scss"]
})
export class ResultViewPanelComponent implements OnInit {
  @Input() selectedAnswer = {};

  constructor() {}

  ngOnInit() {}
}

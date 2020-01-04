import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Result } from 'src/app/interfaces/Result';

@Component({
  selector: "app-search-panel",
  templateUrl: "./search-panel.component.html",
  styleUrls: ["./search-panel.component.scss"]
})
export class SearchPanelComponent implements OnInit {
  @Output() onSearch: EventEmitter<any> = new EventEmitter();

  searchValue = "";

  constructor(private apiService: ApiService) {}
  ngOnInit() {}

  send() {
    if (this.searchValue) {
      this.apiService.getTagResults(this.searchValue).subscribe(x => {
        this.onSearch.emit(
          (x as any).items
            .filter((x, i) => i < 5)
            .map(x => ({
              score: x.score,
              link: x.link,
              view_count: x.view_count,
              title: x.title,
              image: x.owner.profile_image
            }as Result))
        );
      });
    }
  }
}

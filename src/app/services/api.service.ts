import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTagResults(tagName) {
    return this.http.get(
      `https://api.stackexchange.com/2.2/tags/${tagName}/faq?site=stackoverflow`
    );
  }
}

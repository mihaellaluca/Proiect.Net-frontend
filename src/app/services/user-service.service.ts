import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "./global-service.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private globalService: GlobalService) {}

  getUserById(userId) {
    return this.http.get(`${this.globalService.apiURL}/users/${userId}`);
  }

  getSuggestedUsers(neededTechnologies) {
    var json = {"NeededTechnologies": neededTechnologies};
    console.log("Needed tech: ", neededTechnologies, json);
    return this.http.post(`${this.globalService.apiURL}/users/suggestions`, json);
  }

}

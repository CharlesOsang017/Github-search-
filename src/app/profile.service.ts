import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private client_id = "89";
  private client_secret = "89810012c53ef17ca450723ffc44cdfa49a71512";


  constructor(private http:HttpClient) { 
    console.log("Service is now ready!");
    this.username = "CharlesOsang017";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.client_id + "&client_secret=" + this.client_secret)
  }
  updateProfile(username:string){
    this.username = username;
  }
}
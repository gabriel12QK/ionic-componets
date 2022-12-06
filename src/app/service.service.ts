import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  showAnime(){
    return this.http.get<any>("https://api.jikan.moe/v4/anime")
  }
}

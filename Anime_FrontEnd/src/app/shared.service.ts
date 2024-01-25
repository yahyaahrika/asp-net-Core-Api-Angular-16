import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 

  constructor(private http:HttpClient) {   }
  private url = environment.ApiUrl;

  animes:any[]= [];

  CreateNewAnime(anime: any){
   return this.http.post( this.url , anime);
  }
  Delete(id: any){
    return this.http.delete(this.url+ '/'+ id);
  }

  GetListAnime(){
    return this.http.get(this.url);
  }
  Update(id :any ,anime :any){
    return this.http.put(this.url + '/' + id, anime);
  }
  GetAnime(id : any){
    return this.http.get(this.url + '/' + id);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorResp, AuthorsResp } from "./interface/Author.Resp.interface";
import { Observable } from 'rxjs';
import { Author } from './interface/Author.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  URL: string = `http://localhost:8181`
  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get<AuthorsResp>(this.URL)
  }

  getAuthor(id:string){
    return this._http.get<AuthorResp>(`${this.URL}/${id}`)
  }

  createAuthor(newAuthor:Author){
    console.log("SERVICE",newAuthor)
    return this._http.post<AuthorResp>(`${this.URL}/new`, newAuthor)
  }

  updateAuthor(id:string, author:Author){
    return this._http.put<AuthorResp>(`${this.URL}/${id}`, author)

  }

  deleteAuthor(id:string){
    return this._http.delete(`${this.URL}/remove/${id}`)
  }
}

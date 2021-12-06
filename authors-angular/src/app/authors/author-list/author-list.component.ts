import { Component, Input, OnInit } from '@angular/core';
import { AuthorsResp, AuthorResponse, AuthorResp } from '../interface/Author.Resp.interface';
import { Author } from '../interface/Author.interface';
import { AuthorService } from '../author.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
})

export class AuthorListComponent implements OnInit {
  
  authors$: Observable<AuthorsResp> | undefined;
  constructor(
    private authorService:AuthorService,
    private _router:Router,
    private _route:ActivatedRoute) { 
  }

  deleteAuthor($event:any):void{
    console.log($event.target.id)
    // $event.target.closest('.author').remove()
    this.authorService.deleteAuthor($event.target.id).subscribe(
      (data:any) => {
        console.log(data)
        this.authors$ = this.authorService.getAuthors()
        this._router.navigate(['list'])
      }
    )
  }

  ngOnInit(): void {
    this.authors$ = this.authorService.getAuthors()
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../interface/Author.interface';
import { AuthorResp } from "../interface/Author.Resp.interface";
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
})

export class AuthorFormComponent implements OnInit {

  author:Author = {
    name:"",
  }

  constructor(
    private authorService:AuthorService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  createAuthor(){
    console.log("creating author")
    this.authorService.createAuthor(this.author).subscribe((data:AuthorResp) =>{
      console.log(data)
      this._router.navigate(["author-list"])
    })

  }

}

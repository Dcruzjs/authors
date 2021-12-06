import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorResp, AuthorResponse } from "../interface/Author.Resp.interface";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
})
export class EditAuthorComponent implements OnInit {
  errorMsg:string = ""
  author:AuthorResponse = {
    _id:"",
    name:"",
    createdAt:new Date(),
    updatedAt:new Date(),
    __v:0,
  }

  constructor(
    private authorService:AuthorService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 

}

ngOnInit(): void {
    this._route.params.pipe( switchMap(({id})=> this.authorService.getAuthor(id)) )
    .subscribe( (resp:AuthorResp) => {
      console.log("Author Received: ", resp.author._id );
      this.author = resp.author
    
    },
      (error)=> {
        error.statusText === "Not Found" ? this.errorMsg = `That Author was not Found in the Database.`: ""
      }
    );
  
  }

  updateAuthor(){
    console.log("updating author")
    this.authorService.updateAuthor(this.author._id, this.author ).subscribe((data:AuthorResp) => {
      console.log(data)
      this._router.navigate(["list"])
    })
    
  }
  
  deleteAuthor($event:any){
    console.log("deleting author")
    console.log($event.target.id)
    this.authorService.deleteAuthor($event.target.id).subscribe(data =>{
      console.log(data)
      this._router.navigate(["list"])
    } )
    
  }
}

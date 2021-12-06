import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthorService } from './author.service';
import { AuthorRoutingModule } from './author-routing.module';
import { EditAuthorComponent } from './edit-author/edit-author.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AuthorListComponent,
    AuthorFormComponent,
    EditAuthorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthorRoutingModule,
    HttpClientModule
  ],
  exports:[
    MainPageComponent
  ],
  providers: [AuthorService],
  
})
export class AuthorsModule { }

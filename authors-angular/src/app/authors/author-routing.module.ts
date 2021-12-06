import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorFormComponent } from "./author-form/author-form.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";

const routes: Routes = [
  {
    path:"list",
    pathMatch:"full",
    component: AuthorListComponent
  },
  {
    path:"new",
    component: AuthorFormComponent
  },
  {
    path:"edit/:id",
    component: EditAuthorComponent
  },
  {
    path:"**",
    redirectTo: "list"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';



@NgModule({
  declarations: [AdminPanelComponent, AddArticleComponent, MyArticlesComponent, AdminArticleComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

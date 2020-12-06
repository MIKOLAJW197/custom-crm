import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AddArticleComponent,
    MyArticlesComponent,
    AdminArticleComponent,
    EditArticleComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}

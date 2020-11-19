import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleArticleComponent } from './single-article/single-article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesComponent } from './articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';



@NgModule({
  declarations: [SingleArticleComponent, ArticlesListComponent, ArticlesComponent, ArticleDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddArticleComponent } from './add-article/add-article.component';



@NgModule({
  declarations: [AdminPanelComponent, AddArticleComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

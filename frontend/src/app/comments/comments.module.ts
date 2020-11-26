import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsSectionComponent } from './comments-section/comments-section.component';



@NgModule({
  declarations: [CommentsSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentsSectionComponent]
})
export class CommentsModule { }

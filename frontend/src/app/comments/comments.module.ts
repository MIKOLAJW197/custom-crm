import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { SingleCommentComponent } from './single-comment/single-comment.component';



@NgModule({
  declarations: [CommentsSectionComponent, AddCommentComponent, SingleCommentComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentsSectionComponent]
})
export class CommentsModule { }

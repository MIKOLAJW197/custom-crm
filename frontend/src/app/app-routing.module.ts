import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { LoggedUserGuard } from './auth/logged-user.guard';
import { EditArticleComponent } from './admin/edit-article/edit-article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminPanelComponent,
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'article/edit/:id',
    component: EditArticleComponent,
    canActivate: [LoggedUserGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

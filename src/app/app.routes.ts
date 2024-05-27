import { Routes } from '@angular/router';
import { ArticleOneComponent } from './article-one/article-one.component';
import { ArticleComponent } from './article/article.component';
import { ArticleOneCommentComponent } from './article-one-comment/article-one-comment.component';

export const routes: Routes = [
  {
    path: 'articles',
    component: ArticleComponent,
    children: [
      {
        path: ':id', // /articles/2
        component: ArticleOneComponent,
        children: [
          {
            path: 'comments',
            component: ArticleOneCommentComponent,
          },
        ],
      },
    ],
  },
];

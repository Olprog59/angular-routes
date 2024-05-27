import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-one-comment',
  standalone: true,
  imports: [],
  templateUrl: './article-one-comment.component.html',
  styleUrl: './article-one-comment.component.css',
})
export class ArticleOneCommentComponent {
  router: ActivatedRoute = inject(ActivatedRoute);

  id: string | null = '';

  ngOnInit() {
    this.router.parent?.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article-one',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './article-one.component.html',
  styleUrl: './article-one.component.css',
})
export class ArticleOneComponent {
  router: ActivatedRoute = inject(ActivatedRoute);

  id: string | null = '';

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }
}

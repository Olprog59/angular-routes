import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  articles = [
    {
      id: 1,
      title: 'Article 1',
      content: 'This is the content of Article 1',
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'This is the content of Article 2',
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'This is the content of Article 3',
    },
  ];
}

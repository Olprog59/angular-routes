import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOneCommentComponent } from './article-one-comment.component';

describe('ArticleOneCommentComponent', () => {
  let component: ArticleOneCommentComponent;
  let fixture: ComponentFixture<ArticleOneCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleOneCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleOneCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

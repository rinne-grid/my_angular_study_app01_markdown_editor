import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownListCardComponent } from './markdown-list-card.component';

describe('MarkdownListCardComponent', () => {
  let component: MarkdownListCardComponent;
  let fixture: ComponentFixture<MarkdownListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

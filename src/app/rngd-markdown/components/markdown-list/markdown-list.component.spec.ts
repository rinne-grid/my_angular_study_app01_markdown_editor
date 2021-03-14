import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownListComponent } from './markdown-list.component';

describe('MarkdownListComponent', () => {
  let component: MarkdownListComponent;
  let fixture: ComponentFixture<MarkdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

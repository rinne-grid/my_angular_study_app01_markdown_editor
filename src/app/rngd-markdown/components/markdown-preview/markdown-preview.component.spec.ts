import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownPreviewComponent } from './markdown-preview.component';
import {MarkdownItem} from '../../models/MarkdownItem';

describe('MarkdownPreviewComponent', () => {
  let component: MarkdownPreviewComponent;
  let fixture: ComponentFixture<MarkdownPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('Markdownプレビューが表示されること', () => {
  //   component.currentItem = MarkdownItem.factory('Previewノート', '### Preview');
  //   expect(component.currentItem.title).toBe('Previewノート');
  // });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContextComponent } from './editor-context.component';

describe('EditorContextComponent', () => {
  let component: EditorContextComponent;
  let fixture: ComponentFixture<EditorContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorContextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

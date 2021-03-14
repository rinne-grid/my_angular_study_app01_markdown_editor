import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorActionComponent } from './editor-action.component';

describe('EditorActionComponent', () => {
  let component: EditorActionComponent;
  let fixture: ComponentFixture<EditorActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

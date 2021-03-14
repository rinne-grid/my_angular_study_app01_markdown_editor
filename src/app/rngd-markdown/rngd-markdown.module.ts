import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorContextComponent } from './components/editor-context/editor-context.component';
import { EditorActionComponent } from './components/editor-action/editor-action.component';
import { MarkdownListComponent } from './components/markdown-list/markdown-list.component';
import { MarkdownListCardComponent } from './components/markdown-list-card/markdown-list-card.component';
import { MarkdownEditComponent } from './components/markdown-edit/markdown-edit.component';
import { MarkdownPreviewComponent } from './components/markdown-preview/markdown-preview.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ShortTextPipe } from './pipe/short-text.pipe';

@NgModule({
  declarations: [
    EditorContextComponent,
    EditorActionComponent,
    MarkdownListComponent,
    MarkdownListCardComponent,
    MarkdownEditComponent,
    MarkdownPreviewComponent,
    ShortTextPipe
  ],
  imports: [
    // Angular Modules
    CommonModule,
    FormsModule,
    // Angular Material Modules
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
  ],
  exports: [
    EditorContextComponent,
    EditorActionComponent,
    MarkdownListComponent,
    MarkdownListCardComponent,
    MarkdownEditComponent,
    MarkdownPreviewComponent,
    ShortTextPipe,
  ]
})
export class RngdMarkdownModule { }

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkdownStoreService } from '../../services/markdown-store.service';
import { MarkdownItem } from '../../models/MarkdownItem';

@Component({
  selector: 'app-editor-action',
  templateUrl: './editor-action.component.html',
  styleUrls: ['./editor-action.component.scss'],
})
export class EditorActionComponent implements OnInit {
  private subscription: Subscription;
  constructor(private markdownStoreService: MarkdownStoreService) {}

  ngOnInit(): void {}

  addMarkdownItem(): void {
    const newMarkdownItem = MarkdownItem.factory('新規', '');
    this.markdownStoreService.add(newMarkdownItem);
  }
}

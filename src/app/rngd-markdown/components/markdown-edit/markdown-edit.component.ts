import {Component, Input, OnInit} from '@angular/core';
import {MarkdownItem} from '../../models/MarkdownItem';
import {Observable, Subscription} from 'rxjs';
import {MarkdownStoreService} from '../../services/markdown-store.service';

@Component({
  selector: 'app-markdown-edit',
  templateUrl: './markdown-edit.component.html',
  styleUrls: ['./markdown-edit.component.scss']
})
export class MarkdownEditComponent implements OnInit {

  @Input() currentItem: MarkdownItem;

  constructor(private markdownStoreService: MarkdownStoreService) { }

  ngOnInit(): void {}

  changeMarkdownEditor(item: MarkdownItem): void {
    this.markdownStoreService.onNotifyMarkdownSharedDataSourceChanged(item);
  }

}

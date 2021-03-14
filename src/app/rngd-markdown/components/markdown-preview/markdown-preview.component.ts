import {Component, Input, OnChanges, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {MarkdownItem} from '../../models/MarkdownItem';
import * as MarkdownIt from 'markdown-it';
import {MarkdownStoreService} from '../../services/markdown-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss']
})
export class MarkdownPreviewComponent implements OnInit, OnChanges {
  @Input() currentItem: MarkdownItem;
  markdownPreviewBody: SafeHtml = '';
  private mkit: MarkdownIt;
  private subscription!: Subscription;
  constructor(
    private domSanitizer: DomSanitizer,
    private markdownStoreService: MarkdownStoreService
  ) { }

  ngOnInit(): void {
    this.mkit = new MarkdownIt();
    this.subscription = this.markdownStoreService.markdownSharedDataSource$.subscribe(
      item => {
        this.markdownPreviewBody = this.domSanitizer.bypassSecurityTrustHtml(this.mkit.render(item.body));
      }
    );
  }

  ngOnChanges(): void {

  }

}

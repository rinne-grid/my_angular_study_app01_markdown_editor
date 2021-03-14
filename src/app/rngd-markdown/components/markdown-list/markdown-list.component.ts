import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MarkdownItem} from '../../models/MarkdownItem';
import {Subscription} from 'rxjs';
import {MarkdownStoreService} from '../../services/markdown-store.service';

@Component({
  selector: 'app-markdown-list',
  templateUrl: './markdown-list.component.html',
  styleUrls: ['./markdown-list.component.scss']
})
export class MarkdownListComponent implements OnInit, OnDestroy {

  @Input() itemList: MarkdownItem[];

  /***
   * MarkdownStoreServiceの変数を参照
   * @type {MarkdownItem}
   * @memberOf {MarkdownListComponent}
   */
  public markdownSharedDataProp: MarkdownItem;

  private subscription!: Subscription;

  constructor(private markdownStoreService: MarkdownStoreService) { }

  ngOnInit(): void {
    this.subscription = this.markdownStoreService.markdownSharedDataSource$.subscribe(
      item => {
        // console.log('MarkdownListComponent - subscription - fire', item);
        this.markdownSharedDataProp = item;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clickCardItem(item: MarkdownItem): void {
    this.markdownStoreService.onNotifyMarkdownSharedDataSourceChanged(item);
  }

}

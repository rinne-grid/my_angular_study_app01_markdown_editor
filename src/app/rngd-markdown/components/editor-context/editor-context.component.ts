import {Component, OnDestroy, OnInit} from '@angular/core';
import {MarkdownItem} from '../../models/MarkdownItem';
import {Observable, Subscription} from 'rxjs';
import {MarkdownStoreService} from '../../services/markdown-store.service';

@Component({
  selector: 'app-editor-context',
  templateUrl: './editor-context.component.html',
  styleUrls: ['./editor-context.component.scss']
})
export class EditorContextComponent implements OnInit, OnDestroy {
  itemList: MarkdownItem[] = [];
  itemListRx: Observable<MarkdownItem[]> = this.markdownStoreService.markdownList$;

  selectedItemRx: Observable<MarkdownItem> = this.markdownStoreService.markdownSelected$;

  selectedItem: MarkdownItem;
  // 現在選択中のマークダウンデータ購読用
  private subscription!: Subscription;
  // マークダウンリスト購読用
  private listSubscription!: Subscription;

  constructor(private markdownStoreService: MarkdownStoreService) { }

  ngOnInit(): void {
    this.selectedItem = MarkdownItem.factory('最初のMarkdownノート', '');
    // this.dummyDataFactory();
    this.markdownStoreService.loadAll().subscribe(markdownList => {
      this.itemList = markdownList;
      this.itemList.unshift(this.selectedItem);
    });

    // EditorContextで現在選択中のマークダウンデータの変更を購読する
    this.subscription = this.markdownStoreService.markdownSharedDataSource$.subscribe(
      item => {
        // console.log('EditorContextComponent - subscription - fire', item);
        this.selectedItem = item;
      }
    );
    // EditorContextでマークダウンデータ一覧の変更を購読する
    this.listSubscription = this.markdownStoreService.markdownListSharedDataSource$.subscribe(
      itemList => {
        this.itemList = itemList;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.listSubscription.unsubscribe();
  }

  dummyDataFactory(): void {
    for (let i = 0; i < 10; i++) {
      this.itemList.push(
        MarkdownItem.factory(
        `${i}番目のデータtitle`,
        `## ${i}番目のデータbody
* test
* test
`
        )
      );
    }
  }

}

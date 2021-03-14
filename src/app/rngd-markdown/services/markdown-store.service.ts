import { Injectable } from '@angular/core';
import { IMarkdownStoreService } from '../interfaces/IMarkdownStoreService';
import {MarkdownItem} from '../models/MarkdownItem';
import {Observable, of, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarkdownStoreService implements IMarkdownStoreService {
  /***
   * 現在選択中のマークダウンのデータストア
   * @type {MarkdownItem}
   * @private
   * @memberOf {MarkdownStoreService}
   */
  private storeMarkdownSharedData: MarkdownItem;

  /***
   * 現在選択中のマークダウンのデータストアのデータ変更通知用
   * @type {Subject<MarkdownItem>>}
   * @private
   * @memberOf {MarkdownStoreService}
   */
  private markdownSharedDataSource = new Subject<MarkdownItem>();

  /***
   * 現在選択中のマークダウンのデータストアをSubscribeするためのオブジェクト
   * @type {Observable<MarkdownItem>>}
   * @private
   * @memberOf {MarkdownStoreService}
   */
  public markdownSharedDataSource$ = this.markdownSharedDataSource.asObservable();

  /***
   * マークダウン一覧データストア
   * @type {MarkdownItem[]}
   * @private
   * @memberOf {MarkdownStoreService}
   */
  private storeMarkdownListSharedData: MarkdownItem[] = [];

  /***
   * マークダウン一覧データストアの変更通知用
   * @type {Subject<MarkdownItem[]>}
   * @private
   * @memberOf {MarkdownStoreService}
   */
  private markdownListSharedDataSource = new Subject<MarkdownItem[]>();

  /***
   * マークダウン一覧データストアをSubscribeするためのオブジェクト
   */
  public markdownListSharedDataSource$ = this.markdownListSharedDataSource.asObservable();

  constructor() { }

  /***
   * 現在選択中のマークダウンのデータストアの変更を通知する
   * @param updated {MarkdownItem}
   */
  public onNotifyMarkdownSharedDataSourceChanged(updated: MarkdownItem): void  {
    this.markdownSharedDataSource.next(updated);
    this.storeMarkdownSharedData = updated;
  }

  /***
   * マークダウン一覧データストアの変更を通知する
   * @param updated
   */
  public onNotifyMarkdownListSharedDataSourceChanged(updated: MarkdownItem[]): void {
    this.markdownListSharedDataSource.next(updated);
    this.storeMarkdownListSharedData = updated;
  }

  /***
   * マークダウン一覧データストアに新規データを追加する
   * @param markdownItem
   */
  add(markdownItem: MarkdownItem): void {
    this.storeMarkdownListSharedData.push(markdownItem);
    this.onNotifyMarkdownListSharedDataSourceChanged(this.storeMarkdownListSharedData);
  }

  save(markdownItem: MarkdownItem): Observable<boolean> {
    return null;
  }
  load(key: string): Observable<MarkdownItem> {
    return null;
  }

  /***
   * 既存データをロードする
   */
  loadAll(): Observable<MarkdownItem[]> {
    const markdownItemList: MarkdownItem[] = [];
    // ダミーデータ作成
    for (let i = 0; i < 5; i++) {
      markdownItemList.push(
        MarkdownItem.factory(
        `${i}番目のデータ`,
        `## ${i}番目のデータ本文
* test
* test
* test
* test
* test
`
        )
      );
    }
    this.storeMarkdownListSharedData = markdownItemList;
    const observableList = of(markdownItemList);
    return observableList;
  }
}

import { MarkdownItem } from '../models/MarkdownItem';
import {Observable} from 'rxjs';

export interface IMarkdownStoreService {
  save(markdownItem: MarkdownItem): Observable<boolean>;
  load(key: string): Observable<MarkdownItem>;
  loadAll(): Observable<MarkdownItem[]>;
}

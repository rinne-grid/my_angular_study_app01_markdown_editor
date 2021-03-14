import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MarkdownItem} from '../../models/MarkdownItem';
import { RngdMarkdownConst } from '../../const/RngdMarkdownConst';
@Component({
  selector: 'app-markdown-list-card',
  templateUrl: './markdown-list-card.component.html',
  styleUrls: ['./markdown-list-card.component.scss']
})
export class MarkdownListCardComponent implements OnInit {

  @Input() markdownItem: MarkdownItem;

  titleLen = RngdMarkdownConst.LEN_NAVIGATION_MARKDOWN_TITLE;
  bodyLen = RngdMarkdownConst.LEN_NAVIGATION_MARKDOWN_BODY;

  constructor() { }

  ngOnInit(): void {
  }


}

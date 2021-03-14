import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RngdMarkdownModule} from './rngd-markdown/rngd-markdown.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ShortTextPipe} from './rngd-markdown/pipe/short-text.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RngdMarkdownModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

# RngdMarkdownEditor

### Angularの勉強のため、MarkdownEditorを作成

* これの中身

![images](http://www.rinsymbol.sakura.ne.jp/github_images/rngd-ng-markdown-editor.png)

* [x] Markdownプレビュー
* [x] 複数データの表示
* [ ] データの削除
* [ ] データの永続化
  * [ ] localStorage
* [ ] 外部データの読み込み  
* [ ] カテゴリの追加

### 備忘録

* カスタムパイプを作って使うと便利（ng generate pipe name）
* app配下にアプリ用のフォルダを作成し、その配下で```ng generate module module-name```をすると管理しやすい感じ
* コンポーネント間のやり取りで状態管理を行う場合、Subject<TargetModel>のインスタンスからasObservableオブジェクトを取得し、コンポーネント側でsubscribeする


### 以下デフォルトのREADME内容

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

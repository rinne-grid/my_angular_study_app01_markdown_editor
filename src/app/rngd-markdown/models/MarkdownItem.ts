export class MarkdownItem {
    private titleValue: string;
    private bodyValue: string;

    get title(): string {
        return this.titleValue;
    }

    set title(value: string) {
        this.titleValue = value;
    }

    get body(): string {
        return this.bodyValue;
    }

    set body(value: string) {
        this.bodyValue = value;
    }

    constructor(title: string, body: string) {
        this.title = title;
        this.body = body;
    }
    public static factory(title: string, body: string): MarkdownItem {
        return new MarkdownItem(title, body);
    }
}

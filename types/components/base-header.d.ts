import { LitElement } from "lit";
export declare class BaseHeader extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
    goBack(): void;
    protected createRenderRoot(): this;
}
export declare class ArrowLeft extends LitElement {
    className: string;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        "base-header": BaseHeader;
        "arrow-left": ArrowLeft;
    }
}

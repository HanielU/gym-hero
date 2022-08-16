import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("base-header")
export class BaseHeader extends LitElement {
  render() {
    return html`
      <div class="mb-5 w-full p-4">
        <button @click=${this.goBack} class="p-2">
          <arrow-left className="fill-white h-8 w-8" />
        </button>
      </div>
    `;
  }

  goBack() {
    window.history.back();
  }

  protected createRenderRoot() {
    this.style.display = "contents";
    return this;
  }
}

@customElement("arrow-left")
export class ArrowLeft extends LitElement {
  @property() className = "";

  render() {
    return html`
      <svg
        class=${this.className}
        id="Outline"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>155 arrow left</title>
        <path
          d="M.876,14.088l3.879,3.879a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L2.614,13,23,13a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1L2.553,11,6.169,7.381a1,1,0,0,0,0-1.414h0a1,1,0,0,0-1.414,0L.875,9.846A3.007,3.007,0,0,0,.876,14.088Z"
        />
      </svg>
    `;
  }
  protected createRenderRoot() {
    this.style.display = "contents";
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "base-header": BaseHeader;
    "arrow-left": ArrowLeft;
  }
}

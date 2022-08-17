import { LitElement, html, css } from "lit";

class IconElement extends LitElement {
  static styles = css`
    svg {
      fill: white;
      height: 1.5rem;
      width: 1.5rem;
    }
  `;

  constructor() {
    super();
    this.style.display = "contents";
  }
}
export { html, css, IconElement };

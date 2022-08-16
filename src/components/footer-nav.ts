import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./icons";

const paths = {
  home: "/src/home.html",
  list: "/src/list.html",
  bmi: "/src/bmi.html",
  gyms: "/src/gyms.html",
  fitness: "/src/fitness.html"
};

@customElement("app-nav")
export class FooterNav extends LitElement {
  render() {
    const url = window.location.pathname;
    const _class = "flex p-5 rounded-full";

    return html`
      <footer
        class="fixed bottom-0 left-0 flex w-full items-center justify-evenly bg-primary py-4 text-white"
      >
        <a href=${paths.list} class="${_class} ${url === paths.list && "bg-[#f5f5f543]"}">
          <list-icon />
        </a>

        <a href=${paths.gyms} class="${_class} ${url === paths.gyms && "bg-[#f5f5f543]"}">
          <map-icon />
        </a>

        <a href=${paths.home} class="${_class} ${url === paths.home && "bg-[#f5f5f543]"}">
          <home-icon />
        </a>

        <a href=${paths.bmi} class="${_class} ${url === paths.bmi && "bg-[#f5f5f543]"}">
          <calculator-icon />
        </a>

        <a href=${paths.fitness} class="${_class} ${url === paths.fitness && "bg-[#f5f5f543]"}">
          <dumbell-icon />
        </a>
      </footer>
    `;
  }

  protected createRenderRoot() {
    this.style.display = "contents";
    return this;
  }
}

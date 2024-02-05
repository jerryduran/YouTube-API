var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Task } from '@lit/task';
import '@carbon/web-components/es/components/search/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@material/web/button/elevated-button.js';
import '@material/web/icon/icon.js';
import { getSearch } from '../api/YoutubeAPI';
import '../components/results-element';
import '../components/search-element';
import '../components/filter-element';
let FrontPageElement = class FrontPageElement extends LitElement {
    constructor() {
        super();
        this.value = '';
        this.filterBy = '';
        this.searchTask = new Task(this, {
            task: getSearch,
            args: () => [],
            autoRun: false,
        });
        this.runSearch = (value) => {
            this.value = value;
            this.searchTask.run({ query: value });
        };
        this.handleFilterBy = (filterBy) => {
            this.filterBy = filterBy;
            this.searchTask.run({ query: this.value, filterBy });
        };
        //this.searchTask.run();
    }
    render() {
        return this.searchTask.render({
            initial: () => html `<div> initial</div>`,
            pending: () => html `<div>pending</div>`,
            complete: (data) => {
                ;
                return html `
      <div class="container">
      <div class="search">
      <search-element
       .value="${this.value}"
       .runSearch="${this.runSearch}"
      ></search-element>
      <div class="filters">
      <filter-element
      .filterBy="${this.filterBy}"
      .handleFilterBy="${this.handleFilterBy}"
      ></filter-element>
  </div>
  </div>
  <results-element
    .data="${data.items}"
    .runSearch="${this.runSearch}"
    .value=${this.value}
    .filterBy="${this.filterBy}"
  ></results-element>
</div>
      </div>
    `;
            },
            error: (error) => html `<div>...something went wrong ${error}</div>`,
        });
    }
};
FrontPageElement.styles = css `
    :host {
      display: flex;
      flex: 1;
      justify-content: center;
      --md-sys-color-primary: #fff;
      --md-sys-color-surface-container-low: #0090f8;
      --md-elevated-button-container-shape: 5px

    }
    .search {
      position: sticky;
      top: 0;
      height: 150px;
      width: 100vw;
      z-index: 1000;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
    }
    .searchTextField {
      width: 300px;
      height: 7ch;
      borderRight: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius" 0;
    }
    .searchButton {
     border: 1px solid lightgray;
     backgroundColor: red;
    }
    .container {
      display: flex;
      height: calc(100vh - 200px);
      flex: 1;
      justify-content: center;
      flex-flow: wrap;
      overflow-y: scroll;
      overflow-x: hidden;
      scrollbar-color: lightgray;
    }
    .filters {
      margin-right: 100px;
      border-radius: 25px;
      background-color: #0090f8
    }
    .individualFilters: {
      margin: 0
    }
  `;
FrontPageElement = __decorate([
    customElement('front-page-element')
], FrontPageElement);
export { FrontPageElement };
//# sourceMappingURL=front-page-element.js.map
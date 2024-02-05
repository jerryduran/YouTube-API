import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
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

@customElement('my-element')
export class MyElement extends LitElement {
  constructor() {
    super();
    this.searchTask.run();
  }

  value: string = '';
  filterBy: string = '';

  static override styles = css`
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
    .loader {
      margin-top: 200px;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid  #0090f8; /* Blue */
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    }
  `;
     

   searchTask = new Task<any, any>(this, {
    task: getSearch,
    args: () => [],
    autoRun: false,
  });
  
  runSearch = (value: string) => {
    this.value = value;
  this.searchTask.run({query: value});
  };
  handleFilterBy = (filterBy: string) => {
    this.filterBy = filterBy;
   this.searchTask.run({ query: this.value, order: filterBy });
  };

  override render() {
   return this.searchTask.render({
     initial: () => html`<div class="loader"></div>`,
     pending: () => html`<div class="loader"></div>`,
     complete: (data: {
       items: any[];
      }) => {
    ;
    return html`
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
      error: (error: string) =>
      html`<div>...something went wrong ${error}</div>`,
 });
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}

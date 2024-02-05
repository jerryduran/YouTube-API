var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/iconbutton/filled-icon-button.js';
const url = 'https://www.youtube.com/watch?v=';
let ResultsElement = class ResultsElement extends LitElement {
    constructor() {
        super(...arguments);
        this.data = [];
        this.filterBy = '';
        this.value = '';
        this.runSearch = null;
    }
    render() {
        return html `
    <div class="container">
    ${this.data.map((video) => html `
        <a href=${url + video.id} class="none">
        <div class="card">
        <div class="cardTitle">
        ${video.snippet.title}
        </div>
        <img
          src=${video.snippet.thumbnails.default.url}
          width="400px"
          height="200px"
          object-fit="cover"/>
        <div class="cardText">
        <div class="videoDescription">
         Description: ${video.snippet.description}
          </div>
          <div class="comment">
            ${video.statistics?.commentCount > 0
            ? html ` <md-filled-icon-button>
                    <label class="iconText">${video.statistics.commentCount}99</label>
                    </md-icon-button>`
            : undefined}
          </div>
        </div>
      </div></a>`)}
  </div>
`;
    }
};
ResultsElement.styles = css `
    :host {
        --md-sys-color-primary: #393939;
    }
    .card {
      height: 350px;
      width: 400px;
      padding: 10px;
      border: 2px solid lightgray;
      border-radius: 10px
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5em;
    }
    .cardText {
      width: 400px;
      white-space: wrap;
      text-overflow: ellipsis;
    }
    .comment {
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .iconText {
        margin-top: 8px;
        font-size: 11px;
    }
    .videoDescription {
        line-height: 2em;
        height: 4em;
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
        width: 100%;
        text-decoration: none;
    }
    a:link {
        color: #000;
        background-color: transparent;
        text-decoration: none!important';
      }
      a:visited {
        color: #000;
        background-color: transparent;
        text-decoration: none! important;
      }
    .none {
        text-decoration: none !important;
    }
    .cardTitle {
        text-decoration: underline;
    }
  `;
__decorate([
    property({ type: Array })
], ResultsElement.prototype, "data", void 0);
__decorate([
    property()
], ResultsElement.prototype, "filterBy", void 0);
__decorate([
    property()
], ResultsElement.prototype, "value", void 0);
__decorate([
    property()
], ResultsElement.prototype, "runSearch", void 0);
ResultsElement = __decorate([
    customElement('results-element')
], ResultsElement);
export { ResultsElement };
//# sourceMappingURL=results-element.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SearchElement = class SearchElement extends LitElement {
    constructor() {
        super(...arguments);
        this.value = '';
        this.runSearch = () => { };
        this.handleChange = (e) => {
            this.value = e.target.value;
        };
    }
    render() {
        return html `<div>
    <input class="styleInput"
    value="${this.value}"
    @change="${this.handleChange}"
    placeHolder="Search"
    label="Search"
  </input>
  <md-elevated-button class="searchIcon" @click="${() => this.runSearch(this.value)}">
  <md-icon>search</md-icon>
    </md-elevated-button>
    </div>`;
    }
};
SearchElement.styles = css `
    :host {
        display: flex;
        justify-content: center;
        flex:1;
        --md-sys-color-primary: #fff;
        --md-sys-color-surface-container-low: #0090f8;
        --md-elevated-button-container-shape: 5px
    }
    .styleInput {
        height: 47px;
        width: 400px;
        padding-left: 15px;
        border: 1.5px solid gray;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        font-size: 12pt;  
    }
    .searchIcon {
        margin: 0;
        border-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;  
      }
    `;
__decorate([
    property({ type: String })
], SearchElement.prototype, "value", void 0);
__decorate([
    property()
], SearchElement.prototype, "runSearch", void 0);
SearchElement = __decorate([
    customElement('search-element')
], SearchElement);
export { SearchElement };
//# sourceMappingURL=search-element.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/elevated-button.js';
let FilterElement = class FilterElement extends LitElement {
    constructor() {
        super(...arguments);
        this.filter = '';
        this.handleFilterBy = () => { };
    }
    render() {
        return html `
        <div>
        <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('')}">All</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('date')}">Date</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('rating')}">Rating</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('relevance')}">Relevance</md-elevated-button>
  </div>
        `;
    }
};
FilterElement.styles = css `
    :host {
        display: flex;
        justify-content: center
      }
    `;
__decorate([
    property({ type: String })
], FilterElement.prototype, "filter", void 0);
__decorate([
    property()
], FilterElement.prototype, "handleFilterBy", void 0);
FilterElement = __decorate([
    customElement('filter-element')
], FilterElement);
export { FilterElement };
//# sourceMappingURL=filter-element.js.map
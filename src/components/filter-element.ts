import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/button/elevated-button.js';



@customElement('filter-element')
export class FilterElement extends LitElement {
    @property({ type: String })
    filter: string = '';
  
    @property()
    handleFilterBy: (value: string) => void = () => { }
    
    static override styles = css`
    :host {
        display: flex;
        justify-content: center
      }
    `;
  

    override render() {
        return html`
        <div>
        <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('')}">All</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('date')}">Date</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('rating')}">Rating</md-elevated-button>
  <md-elevated-button class="individualFilters"  @click="${() => this.handleFilterBy('relevance')}">Relevance</md-elevated-button>
  </div>
        `;
    }


}
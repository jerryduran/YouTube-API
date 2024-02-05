import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('search-element')
export class SearchElement extends LitElement {
    @property({ type: String })
    value: string = '';

    @property()
    runSearch: (value: string) => void = () => { };

    static override styles = css`
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

    handleChange = (e: any) => {
        this.value = e.target.value;
      };

    override render() {
    return html`<div>
    <input class="styleInput"
    value="${this.value}"
    @change="${this.handleChange}"
    placeHolder="Search"
    label="Search"
  </input>
  <md-elevated-button class="searchIcon" @click="${()=>this.runSearch(this.value)}">
  <md-icon>search</md-icon>
    </md-elevated-button>
    </div>`;
    }

}
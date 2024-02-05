import { LitElement } from 'lit';
import { Task } from '@lit/task';
import '@carbon/web-components/es/components/search/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@material/web/button/elevated-button.js';
import '@material/web/icon/icon.js';
import '../components/results-element';
import '../components/search-element';
import '../components/filter-element';
export declare class FrontPageElement extends LitElement {
    constructor();
    value: string;
    filterBy: string;
    static styles: import("lit").CSSResult;
    searchTask: Task<any, any>;
    runSearch: (value: string) => void;
    handleFilterBy: (filterBy: string) => void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'front-page-element': FrontPageElement;
    }
}
//# sourceMappingURL=front-page-element.d.ts.map
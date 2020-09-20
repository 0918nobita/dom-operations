export class CounterElement extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['data-count'];
    }

    attributeChangedCallback(name: string, _: string, newVal: string) {
        if (name !== "data-count") return;
        const childNodes = this.shadowRoot?.childNodes;
        if (!childNodes) return;
        childNodes[1].childNodes[0].textContent = ` ${newVal} `;
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        const upBtn = document.createElement('button');
        upBtn.textContent = "+1";
        upBtn.addEventListener('click', () =>
            this.setAttribute('data-count', String(Number(this.getAttribute('data-count')) + 1)));
        this.shadowRoot?.appendChild(upBtn);

        const meter = document.createElement('span');
        meter.appendChild(document.createTextNode(' 0 '));
        this.shadowRoot?.appendChild(meter);

        const downBtn = document.createElement('button');
        downBtn.textContent = "-1";
        downBtn.addEventListener('click', () =>
            this.setAttribute('data-count', String(Number(this.getAttribute('data-count')) - 1)));
        this.shadowRoot?.appendChild(downBtn);

        const style = document.createElement('style');
        style.appendChild(document.createTextNode('* { color: blue; }'));
        this.shadowRoot?.appendChild(style);

        this.setAttribute('data-count', '0');
    }
}

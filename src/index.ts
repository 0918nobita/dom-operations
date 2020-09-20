import { CounterElement } from './Counter';
import { makeButton } from './makeButton';

customElements.define('counter-element', CounterElement);

const div1 = document.createElement('div');
const counter = document.createElement('counter-element');
div1.appendChild(counter);
document.body.appendChild(div1);

const Btn = makeButton('Clicked');
customElements.define('my-btn', Btn, { extends: 'button' });

const div2 = document.createElement('div');
const btn = document.createElement('button', { is: 'my-btn' });
btn.textContent = 'Click me!';
div2.appendChild(btn);
document.body.appendChild(div2);

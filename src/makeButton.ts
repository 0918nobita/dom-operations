export const makeButton = (msg: string) =>
    class extends HTMLButtonElement {
        constructor() {
            super();

            this.addEventListener('click', () => alert(msg));
        }
    };

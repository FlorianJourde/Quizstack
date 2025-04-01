class StacksElement extends HTMLElement {

    connectedCallback() {
        this.innerHTML = "React enabled"
    }
}

customElements.define('stacks', StacksElement)
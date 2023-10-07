import "../export"
import { addObserver } from "../../store/index"

export class canvasDiv extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/canvasDiv/canvasDiv.css")
            this.shadowRoot?.appendChild(link)

            const canvas = this.ownerDocument.createElement("div")
            canvas.setAttribute("id", "canvas")
            this.shadowRoot?.appendChild(canvas)

            const part1 = this.ownerDocument.createElement("elements-div")
            part1.setAttribute("img", "/src/figures/head1.png")
            part1.setAttribute("id", "head1")
            canvas.appendChild(part1)

            const part2 = this.ownerDocument.createElement("elements-div")
            part2.setAttribute("img", "/src/figures/head2.png")
            part2.setAttribute("id", "head2")
            canvas.appendChild(part2)

            const part3 = this.ownerDocument.createElement("elements-div")
            part3.setAttribute("img", "/src/figures/head3.png")
            part3.setAttribute("id", "head3")
            canvas.appendChild(part3)

            const part4 = this.ownerDocument.createElement("elements-div")
            part4.setAttribute("img", "/src/figures/chest1.png")
            part4.setAttribute("id", "chest1")
            canvas.appendChild(part4)

            const part5 = this.ownerDocument.createElement("elements-div")
            part5.setAttribute("img", "/src/figures/chest2.png")
            part5.setAttribute("id", "chest2")
            canvas.appendChild(part5)

            const part6 = this.ownerDocument.createElement("elements-div")
            part6.setAttribute("img", "/src/figures/chest3.png")
            part6.setAttribute("id", "chest3")
            canvas.appendChild(part6)

            const part7 = this.ownerDocument.createElement("elements-div")
            part7.setAttribute("img", "/src/figures/legs1.png")
            part7.setAttribute("id", "legs1")
            canvas.appendChild(part7)

            const part8 = this.ownerDocument.createElement("elements-div")
            part8.setAttribute("img", "/src/figures/legs2.png")
            part8.setAttribute("id", "legs2")
            canvas.appendChild(part8)

            const part9 = this.ownerDocument.createElement("elements-div")
            part9.setAttribute("img", "/src/figures/legs3.png")
            part9.setAttribute("id", "legs3")
            canvas.appendChild(part9)
        }
    }
}

customElements.define("canvas-div", canvasDiv)
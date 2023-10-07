import "../export"
import { addObserver } from "../../store/index"
import { buttonType } from "../../types/buttonTypes"
import { chestTypes, headTypes, legsTypes } from "../../types/store"

export class BigContainer extends HTMLElement {
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
            link.setAttribute("href", "/src/components/bigContainer/bigContainer.css")
            this.shadowRoot?.appendChild(link)

            const bigContainer = this.ownerDocument.createElement("section")
            this.shadowRoot?.appendChild(bigContainer)

            const buttonRow1 = this.ownerDocument.createElement("div")
            buttonRow1.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow1)

            const button1 = this.ownerDocument.createElement("change-button")
            button1.setAttribute("img", "/src/figures/head1.png")
            button1.setAttribute("id", `${headTypes.head1}`)
            button1.setAttribute("type", `${buttonType.head}`)
            buttonRow1.appendChild(button1)

            const button2 = this.ownerDocument.createElement("change-button")
            button2.setAttribute("img", "/src/figures/head2.png")
            button2.setAttribute("id", `${headTypes.head2}`)
            button2.setAttribute("type", `${buttonType.head}`)
            buttonRow1.appendChild(button2)

            const button3 = this.ownerDocument.createElement("change-button")
            button3.setAttribute("img", "/src/figures/head3.png")
            button3.setAttribute("id", `${headTypes.head3}`)
            button3.setAttribute("type", `${buttonType.head}`)
            buttonRow1.appendChild(button3)

            const buttonRow2 = this.ownerDocument.createElement("div")
            buttonRow2.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow2)

            const button4 = this.ownerDocument.createElement("change-button")
            button4.setAttribute("img", "/src/figures/chest1.png")
            button4.setAttribute("id", `${chestTypes.chest1}`)
            button4.setAttribute("type", `${buttonType.chest}`)
            buttonRow2.appendChild(button4)

            const button5 = this.ownerDocument.createElement("change-button")
            button5.setAttribute("img", "/src/figures/chest2.png")
            button5.setAttribute("id", `${chestTypes.chest2}`)
            button5.setAttribute("type", `${buttonType.chest}`)
            buttonRow2.appendChild(button5)

            const button6 = this.ownerDocument.createElement("change-button")
            button6.setAttribute("img", "/src/figures/chest3.png")
            button6.setAttribute("id", `${chestTypes.chest3}`)
            button6.setAttribute("type", `${buttonType.chest}`)
            buttonRow2.appendChild(button6)

            const buttonRow3 = this.ownerDocument.createElement("div")
            buttonRow3.classList.add("buttonRow")
            bigContainer.appendChild(buttonRow3)

            const button7 = this.ownerDocument.createElement("change-button")
            button7.setAttribute("img", "/src/figures/legs1.png")
            button7.setAttribute("id", `${legsTypes.legs1}`)
            button7.setAttribute("type", `${buttonType.legs}`)
            buttonRow3.appendChild(button7)

            const button8 = this.ownerDocument.createElement("change-button")
            button8.setAttribute("img", "/src/figures/legs2.png")
            button8.setAttribute("id", `${legsTypes.legs2}`)
            button8.setAttribute("type", `${buttonType.legs}`)
            buttonRow3.appendChild(button8)

            const button9 = this.ownerDocument.createElement("change-button")
            button9.setAttribute("img", "/src/figures/legs3.png")
            button9.setAttribute("id", `${legsTypes.legs3}`)
            button9.setAttribute("type", `${buttonType.legs}`)
            buttonRow3.appendChild(button9)
        }

    }
}

customElements.define("big-container", BigContainer)
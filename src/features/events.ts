import {EventEmitter} from "eventemitter3"


const availableEvents = ["contact"] as const

export type AvailableEvents = typeof availableEvents[number]

export class Events extends EventEmitter<AvailableEvents> {
    constructor() {
        super()
    }

    emit(event: AvailableEvents, params: Record<string, unknown>) {
        return super.emit(event, params)
    }
}

export const events = new Events()

events.on("contact", () => {
    const el = document.getElementById("contact-form")
    if (!el) return
    el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
    })
})

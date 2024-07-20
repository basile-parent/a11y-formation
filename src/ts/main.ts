import "../scss/style.scss"
import "../scss/header.scss"
import "../scss/blog.scss"
import "../scss/stats.scss"
import "../scss/history.scss"
import "../scss/shop.scss"
import "../scss/form.scss"
import "../scss/footer.scss"

import "bootstrap"

export const gameDate = initDate()

function initDate(): Date {
    const currentDate = new Date()
    currentDate.setMonth(currentDate.getMonth() + 2)
    currentDate.setHours(14, 0, 0, 0)
    const newDate = new Date(currentDate)
    const endDate = new Date(newDate)
    endDate.setDate(newDate.getDate() + 14)

    injectInHTML(".injectGameDateYear", newDate.getFullYear() + "")
    injectInHTML(".injectGameDateLocaleWithoutYear", newDate.toLocaleDateString("fr-FR", { day: "numeric", month: "long" }))
    injectInHTML(".injectGameEndDateLocale", endDate.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }))

    return newDate
}

export function injectInHTML(querySelector: string, valueToInject: string): void {
    const contentToReplace = document.querySelectorAll(querySelector)
    for (let i = 0; i < contentToReplace.length; i++) {
        contentToReplace[i].innerHTML = valueToInject
    }
}
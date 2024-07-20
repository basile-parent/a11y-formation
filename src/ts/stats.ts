const ANIMATION_DURATION = 1200
const ANIMATION_TICK= 30

async function animateStats() {
    const counters = document.querySelectorAll("#stats .value")

    for (let i = 0; i < counters.length; i++) {
        counters[i].innerHTML = "?"
    }

    for (let i = 0; i < counters.length; i++) {
        const element = counters[i]
        await animateOneStat(element.getAttribute("id") as string, +(element.getAttribute("data-value") as string))
    }

}

function animateOneStat(elementId: string, value: number) {
    const stepCount = ANIMATION_DURATION / ANIMATION_TICK
    const valueStep = Math.ceil(value / stepCount)

    const element = document.querySelector(`#${elementId}`) as Element

    return new Promise<void>((resolve) => {
        let incrementalValue = 0
        const intervalId = setInterval(() => {
            element.innerHTML = incrementalValue.toLocaleString()

            if (incrementalValue >= value) {
                element.innerHTML = value.toLocaleString()
                clearInterval(intervalId)
                resolve()
            }

            incrementalValue += valueStep
        }, ANIMATION_TICK)
    })
}

function checkScrollForAnimation() {
    const element = document.querySelector("#stats") as Element
    const position = element.getBoundingClientRect()

    // Check if numbers are already visible
    if (position.top < window.innerHeight && position.bottom >= 0) {
        animateStats()
    } else {
        window.addEventListener("scroll", animateOnScroll);
    }
}

function animateOnScroll() {
    const element = document.querySelector("#stats") as Element
    const position = element.getBoundingClientRect()

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        animateStats()
        window.removeEventListener("scroll", animateOnScroll)
    }
}

checkScrollForAnimation()
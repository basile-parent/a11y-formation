import {gameDate, injectInHTML} from "./main.ts";

function initCountdown() {
    const currentDate = new Date()
    let diffInSec = Math.abs(gameDate.getTime() - currentDate.getTime()) / 1000;

    const days = Math.floor(diffInSec / 86400);
    injectInHTML(".injectCountdownDays", `${days}`.padStart(2, "0"))
    diffInSec -= days * 86400;

    const hours = Math.floor(diffInSec / 3600) % 24;
    injectInHTML(".injectCountdownHours", `${hours}`.padStart(2, "0"))
    diffInSec -= hours * 3600;

    const minutes = Math.floor(diffInSec / 60) % 60;
    injectInHTML(".injectCountdownMinutes", `${minutes}`.padStart(2, "0"))
    diffInSec -= minutes * 60;

    const seconds = Math.floor(diffInSec % 60);  // in theory the modulus is not required
    injectInHTML(".injectCountdownSeconds", `${seconds}`.padStart(2, "0"))
}

initCountdown()
setInterval(initCountdown, 1000)
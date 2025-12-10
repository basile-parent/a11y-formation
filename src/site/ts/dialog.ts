function openDialog(dialogId: string): void {
    const dialog = document.getElementById(dialogId)
    if (!dialog) {
        console.log(`No dialog to open found with id ${ dialogId }`)
        return;
    }

    dialog.classList.add("show")
}

function closeDialog(dialogId: string): void {
    const dialog = document.getElementById(dialogId)
    if (!dialog) {
        console.log(`No dialog to close found with id ${ dialogId }`)
        return;
    }
    dialog.classList.remove("show")
}

function showCartConfirm(): void {
    document.querySelector(".toast")?.classList.add("show");
    setTimeout(() => document.querySelector(".toast")?.classList.remove("show"), 5000)
}

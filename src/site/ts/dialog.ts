const openDialog = (dialogId: string) => (e: KeyboardEvent): void => {
    e.preventDefault()
    const dialog = document.getElementById(dialogId)
    if (!dialog) {
        console.log(`No dialog to open found with id ${ dialogId }`)
        return;
    }

    dialog.classList.add("show")
}

const closeDialog = (dialogId: string) => (e: KeyboardEvent): void => {
    e.preventDefault()
    const dialog = document.getElementById(dialogId)
    if (!dialog) {
        console.log(`No dialog to close found with id ${ dialogId }`)
        return;
    }
    dialog.classList.remove("show")
}

function showCartConfirm(e: KeyboardEvent): void {
    document.querySelector(".toast")?.classList.add("show");
    setTimeout(() => document.querySelector(".toast"), 5000);
    closeDialog("cartModal")(e)
}

function initDialogButtons(): void {
    [...document.querySelectorAll("#shop article .btn-primary")].forEach((button) => {
        button.addEventListener("click", openDialog("cartModal") as any)
    });
    [...document.querySelectorAll("#cartModal .btn-secondary")].forEach((button) => {
        button.addEventListener("click", closeDialog("cartModal") as any)
    });
    
    [...document.querySelectorAll("#cartModal .btn-primary")].forEach((button) => {
        button.addEventListener("click", showCartConfirm as any)
    });
}

initDialogButtons()

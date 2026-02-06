const modalButtonClose = document.querySelector(".modal-button-close");
const hotelSearchButton = document.querySelector(".hotel-search-button")
const modal = document.querySelector(".modal-container");

const onModalOpen = () => {
    hotelSearchButton.addEventListener('click', function() {
        modal.classList.remove("modal-closed");
    })
}

const onModalClose = () => {
    modalButtonClose.addEventListener('click', function() {
        modal.classList.add("modal-closed");
    })
}

onModalOpen();
onModalClose();

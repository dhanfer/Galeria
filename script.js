document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");
    const modalContainer = document.querySelector(".modal-container");
    const modalImage = document.querySelector(".modal-image");
    const closeModal = document.querySelector(".close-modal");
    const galleryText = document.querySelector(".gallery-text");

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            // Muestra la imagen ampliada
            modalImage.src = this.src;
            modalContainer.style.display = "flex";
            
            // Oculta el texto
            galleryText.style.display = "none";
        });
    });

    closeModal.addEventListener("click", function () {
        // Oculta la imagen ampliada al hacer clic en la "X"
        modalContainer.style.display = "none";

        // Muestra el texto nuevamente
        galleryText.style.display = "block";
    });

    modalContainer.addEventListener("click", function (event) {
        // Oculta la imagen ampliada al hacer clic fuera de la imagen
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";

            // Muestra el texto nuevamente
            galleryText.style.display = "block";
        }
    });
});

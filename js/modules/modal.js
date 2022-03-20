export const modal = () => {
  const more = document.querySelectorAll(".more");
  const modal = document.querySelector(".modal ");
  const modalClose = modal.querySelector(".modal__close");
  const overlay = modal.querySelector(".overlay");

  more.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.toggle("hidden");
    });
  });
  modalClose.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
  overlay.addEventListener("click", () => {
    modal.classList.toggle("hidden");
  });
};

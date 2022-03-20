export const accordions = () => {
  const featureItem = document.querySelectorAll(".feature__item");
  const btns = document.querySelectorAll(".feature__item > .feature__link");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((item) => {
        item.classList.remove("feature__link_active");
        item.nextElementSibling.classList.add("hidden");
      });
      btn.classList.toggle("feature__link_active");
      btn.nextElementSibling.classList.toggle("hidden");
    });
  });
};

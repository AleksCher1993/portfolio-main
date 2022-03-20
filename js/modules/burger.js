export const burger = () => {
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".humburger-menu");
  const menuListItem = document.querySelectorAll(".menu-list__link");

  burger.addEventListener("click", () => {
    menu.style.top = "0";
  });
  menuListItem.forEach((item) => {
    item.addEventListener("click", () => {
      menu.style.top = "";
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !(
        event.target.closest(".menu") || event.target.closest(".humburger-menu")
      )
    ) {
      menu.style.top = "";
    }
  });
};

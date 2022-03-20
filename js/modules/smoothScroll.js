export const smoothScroll = () => {
  const listLink = document.querySelectorAll(".menu-list__link");
  const btn = document.querySelector(".main__button");
  const scroll = document.querySelector(".main__scroll");
  const allLinks = [...listLink, btn, scroll];

  allLinks.forEach((link) => {
    const id = link.getAttribute("href").substring(1);
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.getElementById(id);
      //seamless-scroll-polyfill для плавного скролинга на всех устройствах
      seamless.polyfill();
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
      //ниже стандартный скролинг без внешних библиотек, не работает в сафари
      // section.scrollIntoView({
      //   block: "start",
      //   behavior: "smooth",
      // });
    });
  });
};

export const tabs = () => {
  const designListItem = document.querySelectorAll(".design-list__item");
  const designDescr = document.querySelectorAll(".design__descr");
  const designImages = document.querySelectorAll(".design-images");
  const featureImg = document.querySelectorAll(".feature__img");
  const sectionTitle = document.querySelectorAll(".section__title ");
  const headTitle = document.head.querySelector("title");

  const changeContent = (array, datasetHandler) => {
    array.forEach((itemDesc) => {
      if (itemDesc.dataset.tabsField === datasetHandler) {
        itemDesc.classList.remove("hidden");
      } else itemDesc.classList.add("hidden");
    });
  };

  designListItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      const datasetHandler = event.target.dataset.tabsHandler;

      designListItem.forEach((itemDesign) => {
        itemDesign.classList.remove("design-list__item_active");
      });
      item.classList.add("design-list__item_active");

      changeContent(designDescr, datasetHandler);
      changeContent(designImages, datasetHandler);
      changeContent(featureImg, datasetHandler);
      changeContent(sectionTitle, datasetHandler);

      sectionTitle.forEach((itemTitle) => {
        if (!itemTitle.classList.contains("hidden")) {
          headTitle.innerHTML = itemTitle.innerHTML;
        }
      });
    });
  });
  headTitle.innerHTML = sectionTitle[0].innerHTML;
};

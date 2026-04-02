function renderSpeedCases(itemsSelector, projects, openModalCallback) {
  const itemsContainer = document.querySelector(itemsSelector);

  const htmlLang = document.documentElement.lang.toLowerCase();

  if (!itemsContainer) {
    console.warn(`Контейнер ${itemsSelector} не найден.`);
    return;
  }

  projects.forEach((item) => {
    if (item.output === false) return;
    //card
    const cardItem = document.createElement("div");
    cardItem.classList.add("speed-start__item");

    //link with img
    const linkImg = document.createElement("a");
    linkImg.classList.add("speed-start__img-link");
    linkImg.href = item.link;
    linkImg.rel = "nofollow";
    linkImg.target = "_blank";
    linkImg.title = item.alt;
    cardItem.appendChild(linkImg);

    //img in link
    const imgInLink = document.createElement("img");
    imgInLink.src = item.img;
    imgInLink.alt = item.alt;
    linkImg.appendChild(imgInLink);

    //details
    const details = document.createElement("div");
    details.classList.add("speed-start__details-title");
    if (htmlLang === "uk") details.textContent = item.titleUA;
    if (htmlLang === "en") details.textContent = item.titleEN;
    if (htmlLang === "ru") details.textContent = item.titleRU;
    cardItem.appendChild(details);

    //btns
    const btns = document.createElement("div");
    btns.classList.add("speed-start__btns");
    cardItem.appendChild(btns);

    //btn open modal
    const btnModal = document.createElement("p");
    btnModal.classList.add("speed-start__btn", "open-modal");
    if (htmlLang === "uk") btnModal.textContent = "Отримати консультацію";
    if (htmlLang === "en") btnModal.textContent = "Get a consultation";
    if (htmlLang === "ru") btnModal.textContent = "Получить консультацию";
    btns.appendChild(btnModal);

    //live demo
    const demoBtn = document.createElement("a");
    demoBtn.classList.add("speed-start__limk", "btn");
    demoBtn.href = item.link;
    demoBtn.rel = "nofollow";
    demoBtn.target = "_blank";
    demoBtn.title = item.alt;
    if (htmlLang === "uk") demoBtn.textContent = "Живе демо";
    if (htmlLang === "en") demoBtn.textContent = "Live demo";
    if (htmlLang === "ru") demoBtn.textContent = "Живое демо";
    btns.appendChild(demoBtn);

    // ----------------------
    itemsContainer.appendChild(cardItem);
  });

  if (itemsContainer) {
    itemsContainer.addEventListener("click", (e) => {
      // Проверяем, что кликнули именно по кнопке открытия модалки
      if (e.target.classList.contains("open-modal")) {
        console.log("Открываем модалку для проекта:", e.target.closest(".speed-start__item"));
        if (typeof openModalCallback === "function") {
          openModalCallback();
        }
      }
    });
  }
}

export { renderSpeedCases };

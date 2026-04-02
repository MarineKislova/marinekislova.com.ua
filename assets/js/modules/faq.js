function renderFAQ(containerSelector, faq, dataAtr) {
  const itemsContainer = document.querySelector(containerSelector);
  const htmlLang = document.documentElement.lang.toLowerCase();

  if (!itemsContainer) {
    console.warn(`Контейнер ${containerSelector} не найден.`);
    return;
  }
  itemsContainer.innerHTML = '';

  faq.forEach((item) => {
    // ЛОГ ДЛЯ ПРОВЕРКИ: посмотри в консоль, какие ключи у этого объекта
    console.log("Данные объекта:", item);
    //card
    const accordionItem = document.createElement("div");
    accordionItem.setAttribute("data-accordion",  dataAtr);
    accordionItem.classList.add("accordion__item", "accordion-item");

    //toggle
    const accordionToggle = document.createElement("div");
    accordionToggle.classList.add("accordion__item-header", "accordion-toggle");
    accordionItem.appendChild(accordionToggle);

    const accordionTitle = document.createElement("h3");
    accordionTitle.classList.add("accordion__item-title");
    if (htmlLang === "uk") accordionTitle.textContent = item.questionUA;
    if (htmlLang === "en") accordionTitle.textContent = item.questionEN;
    if (htmlLang === "ru") accordionTitle.textContent = item.questionRU;
    accordionToggle.appendChild(accordionTitle);

    const accordionIcon = document.createElement("span");
    accordionIcon.classList.add("accordion__item-icon", "accordion-icon");
    accordionIcon.textContent = "+";
    accordionToggle.appendChild(accordionIcon);

    //body
    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion__item-body");
    accordionItem.appendChild(accordionBody);

    const accordionBodyText = document.createElement("p");
    if (htmlLang === "uk") accordionBodyText.textContent = item.answerUA;
    if (htmlLang === "en") accordionBodyText.textContent = item.answerEN;
    if (htmlLang === "ru") accordionBodyText.textContent = item.answerRU;
    accordionBody.appendChild(accordionBodyText);

    //---------------
    itemsContainer.appendChild(accordionItem);
  });
}

export { renderFAQ };

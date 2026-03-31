function renderTopSolutions(itemsSelector, projects) {
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
    cardItem.classList.add("topSolutions__item");

    //rowTop
    const cardRowTop = document.createElement("div");
    cardRowTop.classList.add("topSolutions__item-rowTop");
    cardItem.appendChild(cardRowTop);

    const cardService = document.createElement("span");
    cardService.classList.add("topSolutions__services");
    cardRowTop.appendChild(cardService);

    const cardServiceLink = document.createElement("a");
    cardServiceLink.href = item.linkService;
    if (htmlLang === "ua") cardServiceLink.textContent = "Послуги";
    if (htmlLang === "en") cardServiceLink.textContent = "Услуги";
    if (htmlLang === "ru") cardServiceLink.textContent = "Services";
    cardService.appendChild(cardServiceLink);

    const cardServiceImg = document.createElement("img");
    cardServiceImg.src = item.img;
    cardRowTop.appendChild(cardServiceImg);

    //rowBottom
    const cardRowBottom = document.createElement("div");
    cardRowBottom.classList.add("topSolutions__item-rowBottom");
    cardItem.appendChild(cardRowBottom);

    const cardLink = document.createElement("a");
    cardLink.href = item.link;
    if (htmlLang === "ua") cardLink.textContent = item.titleUA;
    if (htmlLang === "en") cardLink.textContent = item.titleEN;
    if (htmlLang === "ru") cardLink.textContent = item.titleRU;
    cardRowBottom.appendChild(cardLink);

    const cardArrow = document.createElement("span");
    cardArrow.classList.add("arrow");
    cardArrow.innerHTML = `                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        stroke="#00ab6b"
                        viewBox="0 0 699.65 254"
                        enable-background="new 0 0 699.65 254"
                        xml:space="preserve"
                      >
                        <polygon
                          fill="#ff0000"
                          points="-0.002,139.501 651.796,139.501 554.904,236.394 572.581,254.071 699.652,127 572.581,-0.071   554.904,17.607 651.796,114.501 -0.002,114.501 "
                        ></polygon>
                      </svg>`;
    cardLink.appendChild(cardArrow);

    // ----------------------
    itemsContainer.appendChild(cardItem);
  });
}

export { renderTopSolutions };

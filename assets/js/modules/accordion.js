function toggleAccordion(toggleSelector, itemSelector, iconSelector, bodySelector) {
    const accordionToggle = document.querySelectorAll(toggleSelector);
    
    accordionToggle.forEach((item) => {
      item.addEventListener("click", () => {
        // ПЕРЕДАЕМ АРГУМЕНТЫ СЮДА
        removeCollapsedClass(itemSelector, bodySelector, iconSelector);
        
        const parentItem = item.closest(itemSelector);
        const content = item.nextElementSibling;
        const icon = item.querySelector(iconSelector);

        // Добавляем класс текущему
        parentItem.classList.add("collapsed");
        
        // Показываем контент текущего
        content.style.display = "flex";
        
        // Меняем иконку текущего
        if (icon) icon.textContent = "-";
      });
    });
  }

  // Обновленная функция очистки
  function removeCollapsedClass(itemSelector, bodySelector, iconSelector) {
    const items = document.querySelectorAll(itemSelector);
    items.forEach((item) => {
      item.classList.remove("collapsed");
      const content = item.querySelector(bodySelector);
      if (content) content.style.display = "none";
      const icon = item.querySelector(iconSelector);
      if (icon) icon.textContent = "+";
    });
  }



export {toggleAccordion}

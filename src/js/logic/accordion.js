import lenis from "../global/smoothScroll.js";

const accordion = (
  accordionItemSelector,
  accordionContentSelector,
  activeClass,
  buttonSelector,
  buttonInitText,
  buttonOpenText
) => {
  let acc = document.querySelectorAll(accordionItemSelector);

  if (acc) {
    acc.forEach((item) => {
      item.addEventListener("click", (e) => {
        let clickedItem = e.target.closest(accordionItemSelector);
        if (clickedItem) {
          let panel = clickedItem.querySelector(accordionContentSelector);
          let button = clickedItem.querySelector(buttonSelector);
          let isActive = clickedItem.classList.contains(activeClass); // Check if the clicked item is active

          // Close all accordions first only if the clicked item is not already active
          if (!isActive) {
            document
              .querySelectorAll(accordionContentSelector)
              .forEach((panel) => {
                if (panel.style.maxHeight) {
                  panel.style.maxHeight = null;
                  panel
                    .closest(accordionItemSelector)
                    .classList.remove(activeClass);
                  const button = panel
                    .closest(accordionItemSelector)
                    .querySelector(buttonSelector);
                  if (button && buttonInitText)
                    button.textContent = buttonInitText;
                }
              });
          }

          // Toggle the clicked item
          if (isActive) {
            panel.style.maxHeight = null;
            clickedItem.classList.remove(activeClass);
            if (button && buttonInitText) button.textContent = buttonInitText;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            clickedItem.classList.add(activeClass);
            if (button && buttonOpenText) button.textContent = buttonOpenText;
          }
        }
        setTimeout(() => {
          lenis.scrollTo(item, {
            offset: -160,
          });
        }, 200);
      });
    });
  }
};

export default accordion;

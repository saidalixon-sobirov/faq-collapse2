// **** 2 - METHOD ****
// Open collapse when click the collapse container box

const faqContainer = document.querySelectorAll(".faq-container");
faqContainer.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.firstChild.nextSibling.classList.toggle("active");
  });
});

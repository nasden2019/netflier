const tabContent = document.querySelectorAll(".tab-content");
const tabLinks = document.querySelectorAll(".tab-selectors");

tabLinks.forEach((link, linkIndex) => {
  link.addEventListener("click", () => {
    tabLinks.forEach((link) => {
      link.classList.remove("tab-border");
    });
    link.classList.add("tab-border");

    tabContent.forEach((content, contentIndex) => {
      if (contentIndex == linkIndex) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

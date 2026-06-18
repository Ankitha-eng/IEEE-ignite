const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");
const searchInput = document.getElementById("searchInput");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const category = button.dataset.category;
    const searchText = searchInput.value.toLowerCase();

    filterEvents(category, searchText);
  });
});

searchInput.addEventListener("input", () => {

  const activeCategory =
    document.querySelector(".filter-btn.active").dataset.category;

  filterEvents(activeCategory, searchInput.value.toLowerCase());
});

function filterEvents(category, searchText){

  eventCards.forEach(card => {

    const title =
      card.querySelector("h3").textContent.toLowerCase();

    const categoryMatch =
      category === "all" ||
      card.classList.contains(category);

    const searchMatch =
      title.includes(searchText);

    card.style.display =
      categoryMatch && searchMatch
      ? "block"
      : "none";
  });
}

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer =
      question.nextElementSibling;

    answer.style.display =
      answer.style.display === "block"
      ? "none"
      : "block";
  });
});

let cardsList = document.querySelector(".cards");
let cards = [];

cards.push(
  { title: "First Github Project", link: "./project1.html" },
  { title: "Mario Project", link: "./project2.html" },
  { title: "Button Project", link: "./project3.html" },
  { title: "List Project", link: "./project4.html" }
);

cards.map((card) => {
  cardsList.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="card-back">
          <a href="${card.link}">Project Link</a>
        </div>
      </div>
    </div>`;
});

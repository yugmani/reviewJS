let index = 0;

const reviewData = (ind) => {
  newItem = reviews.filter((item) => {
    if (reviews.indexOf(item) === ind) {
      return item;
    }
  });

  view(newItem);
};

const view = (person) => {
  let html = `<div class="img-container">`;
  html += `<img src='${person[0].image}' alt="${person[0].name}" class="person-img"></div>`;
  html += `<h3 class="author">${person[0].name}</h3>`;
  html += `<h4 class="job">${person[0].job}</h4>`;
  html += `<p class="info">${person[0].text}</p>`;

  const viewDom = document.querySelector(".review");
  viewDom.innerHTML = html;
  html = "";
};

const checkNumber = (num) => {
  if (num > reviews.length - 1) {
    return 0;
  }
  if (num < 0) {
    return reviews.length - 1;
  }
  return num;
};

reviewData(index);

const prev = document.querySelector(".prev-btn");
prev.addEventListener("click", (event) => {
  event.preventDefault();
  index = checkNumber(index - 1);
  reviewData(index);
});

const next = document.querySelector(".next-btn");
next.addEventListener("click", (event) => {
  event.preventDefault();
  index = checkNumber(index + 1);
  reviewData(index);
});

const randomEl = document.querySelector(".random-btn");
randomEl.addEventListener("click", (event) => {
  event.preventDefault();
  let random = Math.floor(Math.random() * reviews.length);
  console.log(random);
  reviewData(random);
});

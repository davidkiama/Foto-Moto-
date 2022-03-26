const galleryUl = document.querySelector(".gallery").querySelector("ul");

//Loop and in each iteration render an image randomly
// step maxValue is the numbers of images to render
for (let step = 0; step < 15; step++) {
  let imgInd = Math.floor(Math.random() * 9) + 1;

  const imageHtml = `
    <li>
        <img src="static/img/gal-${imgInd}.jpg" alt="" loading="lazy" class="gal-img" />
    </li>`;
  galleryUl.insertAdjacentHTML("beforeend", imageHtml);
}

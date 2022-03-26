const galleryUl = document.querySelector(".gallery").querySelector("ul");

//Loop and in each iteration render an image randomly
// step maxValue is the numbers of images to render
for (let step = 0; step < 15; step++) {
  let imgInd = Math.floor(Math.random() * 12) + 1;

  const imageHtml = `
  <li class="gal-list">
  <img src="static/img/gal-${imgInd}.jpg" alt="" loading="lazy"
      class="gal-img" />
    <div class="gal-list-desc">
      <div>
          <p class="gal-list__category">Category</p>
          <p class="gal-list__location">Location</p>
      </div>

        <img src="static/img/copy.svg" class="gal-list__copy" />
    </div>
    </li>
  
    
  `;
  galleryUl.insertAdjacentHTML("beforeend", imageHtml);
}

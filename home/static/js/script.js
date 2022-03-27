const galleryUl = document.querySelector(".gallery").querySelector("ul");

//Loop and in each iteration render an image randomly
// step maxValue is the numbers of images to render
// for (let step = 0; step < 15; step++) {
//   let imgInd = Math.floor(Math.random() * 12) + 1;

//   const imageHtml = `
//   <li class="gal-list">
//   <img src="static/img/gal-${imgInd}.jpg" alt="" loading="lazy"
//       class="gal-img" />
//     <div class="gal-list-desc">
//       <div>

//           <p class="gal-list__category">

//           <svg class="icon">
//             <use xlink:href="static/img/sprite.svg#hashtag"></use>
//           </svg>

//             Category
//           </p>
//           <p class="gal-list__location">

//           <svg class="icon">
//             <use xlink:href="static/img/sprite.svg#location"></use>
//           </svg>
//             Location
//           </p>
//       </div>

//       <svg class="icon">
//       <use xlink:href="static/img/sprite.svg#copy"></use>
//     </svg>
//     </div>
//     </li>

//   `;
//   galleryUl.insertAdjacentHTML("beforeend", imageHtml);
// }

//copy image link
const copyIcons = document.querySelectorAll(".icon--copy");
const baseUrl = "http://127.0.0.1:8000";

const copyImageLink = function (imageUrl) {
  navigator.clipboard.writeText(baseUrl + imageUrl);
};

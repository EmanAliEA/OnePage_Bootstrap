const images = [
  {
    srs: "../assets/Images/bottle.jpeg",
    categ: "app",
  },
  {
    srs: "../assets/Images/camera.jpeg",
    categ: "app",
  },
  {
    srs: "../assets/Images/glasses.webp",
    categ: "app",
  },
  {
    srs: "../assets/Images/coffee.jpg",
    categ: "card",
  },
  {
    srs: "../assets/Images/lamp.jpg",
    categ: "card",
  },
  {
    srs: "../assets/Images/cup.jpeg",
    categ: "card",
  },
  {
    srs: "../assets/Images/plants.webp",
    categ: "web",
  },
  {
    srs: "../assets/Images/chair.jpg",
    categ: "web",
  },
  {
    srs: "../assets/Images/watch.webp",
    categ: "web",
  },
];
const cardsImg = document.querySelector(".cards-img");
const btns = document.querySelector(".protfolio .btns");

function createImg(img, i) {
  const imgElement = `
            <div class="card-img ">
              <img src=${img.srs} alt="" class="mb-5" >
              <div class="heading-image bg-light d-flex justify-content-between p-3 align-items-center">
                <div class="text">
                  <p class="fw-bold fs-4">${
                    img.categ === "app"
                      ? "App"
                      : img.categ === "card"
                      ? "Product"
                      : "Branding"
                  } ${i + 1}</p>
                  <p class="text-secondary ">Lorem ipsum, dolor sit</p>
                </div>
                <div class="icon fs-4 text-secondary d-flex  gap-2 align-items-center">
                  <i class="bi bi-search"></i><i class="fa-solid fa-paperclip"></i>
                </div>
              </div>
            </div>
            `;
  return imgElement;
}
function createImgCol(imgs) {
  const html = `<div class="col-12 col-sm col-md-6 col-lg-4 ">
        ${imgs.map((item, i) => createImg(item, i))}
    </div>`;
  cardsImg.insertAdjacentHTML("beforeend", html);
}

function renderImages(type) {
  cardsImg.innerHTML = "";
  let arr = [];
  if (type === "all") {
    for (let i = 0; i < images.length; i++) {
      arr.push(images[i]);
      if (arr.length === 3) {
        createImgCol(arr);
        arr = [];
      }
    }
  } else {
    const arrImg = images.filter((item) => item.categ === type);
    arrImg.map((item) => createImgCol([item]));
  }
}
renderImages("all");
btns.addEventListener("click", (e) => {
  console.log(e.target.dataset.type);
  if (e.target.dataset.type === "app") {
    renderImages("app");
  }
  if (e.target.dataset.type === "all") {
    renderImages("all");
  }
  if (e.target.dataset.type === "card") {
    renderImages("card");
  }
  if (e.target.dataset.type === "web") {
    renderImages("web");
  }
});

//


const $logButton = document.querySelector("#login_button");
const $logStrip = document.querySelector("#login_strip");
const $hideLoginStrip = document.querySelector("#hide_login_strip");

$logButton.addEventListener("click", () => {
  $logStrip.classList.toggle("active");
});

$hideLoginStrip.addEventListener("click", () => {
  $logStrip.classList.toggle("active");
});

const $menuItems = document.querySelectorAll(".menu_item");
const $register = document.querySelector("#register");
const $backDrop = document.querySelector("#backdrop");

const $showCaseCont = document.querySelector("#showcasecont");
const $showCase = document.createElement("img");
$showCase.setAttribute("class", "showcase");
$showCaseCont.appendChild($showCase);

const $registerForm = document.getElementById("register_form");
const $submitRegisterform = document.getElementById("submit_register_form");
const $registerFormLoginButton = document.getElementById(
  "register_form_login_button"
);
const $closeRegisterForm = document.getElementById("close_register_form");

$register.addEventListener("click", (event) => {
  event.preventDefault();
  $backDrop.classList.add("active");
  $registerForm.classList.add("active");
});

$registerFormLoginButton.addEventListener("click", (event) => {
  event.preventDefault();
  $backDrop.classList.remove("active");
  $registerForm.classList.remove("active");
  $logStrip.classList.add("active");
  window.scrollTo(top);
});

$closeRegisterForm.addEventListener("click", () => {
  $backDrop.classList.remove("active");
  $registerForm.classList.remove("active");
});

//for definition < 625px (navigation menu)

$menuItems.forEach((menuitem) => {
  menuitem.addEventListener("click", () => {
    menuitem.classList.toggle("active");
    $menuItems.forEach((other_menuitem) => {
      if (other_menuitem !== menuitem) {
        other_menuitem.classList.remove("active");
      }
    });
  });
});

// Temporary - static - solution for obtaining the contents of the productsCollection container.

const productsCollection = [
  {
    pname: "Bella Gina 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/attica's-charm-001a.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/attica's-charm-001b.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/attica's-charm-001c.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/attica's-charm-001d.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "bellagina001"
  },
  {
    pname: "Mistress Siluette 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-001a.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-001b.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-001c.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-001d.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "mistresssiluette002"
  },
  {
    pname: "Bella Gina 002",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-002a.webp",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-002d.webp",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-002c.webp",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/bella-gina-002b.webp",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "bellagina002"
  },
  {
    pname: "Attica's Charm 001",
    images: [
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/mistress-siluette-002a.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/mistress-siluette-002b.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/mistress-siluette-002c.jpg",
      "http://127.0.0.1:5500/DEPARTMENTS/HOSIERY/images/fashion-model-red-17189453.jpg",
    ],
    dcr: "A placeholder text of the product description for further development - A placeholder text of the product description for further development - A placeholder text of the product description for further development.",
    id: "atticascharm001"
  },
];

const $products = document.getElementById("product_container");

productsCollection.forEach((product) => {
  const mainblock = document.createElement("div");
  mainblock.setAttribute("class", "mainblock");
  mainblock.setAttribute("id", product.id)
  const productName = document.createElement("p");
  productName.setAttribute("class", "product_name");
  productName.innerHTML = product.pname;
  const pictures = document.createElement("div");
  pictures.setAttribute("class", "pictures");

  const imagebox1 = document.createElement("div");
  imagebox1.setAttribute("class", "imagebox imagebox1");
  pictures.appendChild(imagebox1);
  const image1 = document.createElement("img");
  image1.className = 'image';
  image1.src = `${product.images[0]}`;
  image1.alt = 'Some image of the product';
  imagebox1.appendChild(image1);
  const prompt1 = document.createElement("p");
  prompt1.setAttribute("class", "prompt");
  prompt1.innerHTML = "CLICK TO ENHANCE";
  imagebox1.appendChild(prompt1);
  
  const imagebox2 = document.createElement("div");
  imagebox2.setAttribute("class", "imagebox imagebox2");
  pictures.appendChild(imagebox2);
  const image2 = document.createElement("img");
  image2.className = 'image';
  image2.src = `${product.images[1]}`;
  image2.alt = 'Some image of the product';
  imagebox2.appendChild(image2);
  const prompt2 = document.createElement("p");
  prompt2.setAttribute("class", "prompt");
  prompt2.innerHTML = "CLICK TO ENHANCE";
  imagebox2.appendChild(prompt2);

  const description = document.createElement("p");
  description.innerHTML = product.dcr;
  description.setAttribute("class", "description");

  const arrowcont = document.createElement("div");
  arrowcont.setAttribute("class", "arrowcont");

  const arrowleft = document.createElement("button");
  arrowleft.innerHTML = "PREVIOUS SLIDE";
  arrowleft.setAttribute("class", "arrow arrow_left");
  const arrowright = document.createElement("button");
  arrowright.innerHTML = "NEXT SLIDE";
  arrowright.setAttribute("class", "arrow arrow_right");

  mainblock.appendChild(productName);
  mainblock.appendChild(pictures);
  mainblock.appendChild(arrowcont);
  arrowcont.appendChild(arrowleft);
  arrowcont.appendChild(arrowright);
  mainblock.appendChild(description);

  $products.appendChild(mainblock);

  arrowright.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(image1.src);
    if (currentIMG1index < product.images.length - 2 && window.innerWidth > 800) {
      image1.src = product.images[currentIMG1index + 1];
    }
    else if (currentIMG1index < product.images.length - 1 && window.innerWidth < 800) {
      image1.src = product.images[currentIMG1index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG1index = product.images.indexOf(image1.src);
    if (currentIMG1index > 0) {
      image1.src = product.images[currentIMG1index - 1];
    }
  });

  arrowright.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(image2.src);
    console.log(imagebox2.src);
    if (currentIMG2index < product.images.length - 1) {
      image2.src = product.images[currentIMG2index + 1];
    }
  });

  arrowleft.addEventListener("click", () => {
    const currentIMG2index = product.images.indexOf(image2.src);
    if (currentIMG2index > 1) {
      image2.src = product.images[currentIMG2index - 1];
    }
  });

 
  const imageBoxes = mainblock.querySelectorAll(".imagebox");

  imageBoxes.forEach((one) => {
    one.addEventListener("click", () => {
      $backDrop.classList.add("active");
      $showCaseCont.classList.add("active");
      $showCase.src = one.firstChild.src;
      $backDrop.addEventListener("click", () => {
        $backDrop.classList.remove("active");
        $showCaseCont.classList.remove("active");
      });
    });
    
  });


});

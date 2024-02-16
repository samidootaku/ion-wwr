const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 10 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});
/*  */
/*  */
/*  */
const rightCover = document.querySelector(".cover.right-cover");
const leftPage = document.querySelector(".book-page.left-page");

const pages = document.querySelectorAll(".book-page.right-page");
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}
let started = false;
window.onscroll = function () {
  if (window.scrollY >= pages[0].offsetTop) {
    setTimeout(() => {
      rightCover.classList.add("turn");
    }, 2100);
    setTimeout(() => {
      rightCover.style.zIndex = -1;
    }, 2800);
    setTimeout(() => {
      leftPage.style.zIndex = 20;
    }, 3200);

    if (!started) {
      pages.forEach((_, index) => {
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].classList.remove("turn");
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
          }, 500);
        }, (index + 1) * 200 + 2100);
      });
    }
    started = true;
  }
};
/*  */
/*  */
/*  */
/*  */

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const enviElement = document.querySelector(".envi");
const Simg = document.getElementById("ouruniv");
const purp = document.getElementById("ourpurp");
function handleScroll() {
  if (isInViewport(enviElement)) {
    enviElement.classList.add("animating");
    Simg.classList.add("animating");
    purp.classList.add("animating");
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
/*  */
/*  */
/*  */
/*  */
/*  */
const checkbox = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("nav");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    nav.classList.add("nav-checked");
  } else {
    nav.classList.remove("nav-checked");
  }
});
const body = document.body;

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("body-checked");
  } else {
    body.classList.remove("body-checked");
  }
});

const navlogo = document.getElementById("navlogo");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    navlogo.classList.add("navlogo-checked");
  } else {
    navlogo.classList.remove("navlogo-checked");
  }
});

const Nlogo = document.getElementById("Nlogo");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    Nlogo.classList.add("Nlogo-checked");
  } else {
    Nlogo.classList.remove("Nlogo-checked");
  }
});
const anch1 = document.getElementById("anch1");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    anch1.classList.add("anch1-checked");
  } else {
    anch1.classList.remove("anch1-checked");
  }
});
const anch2 = document.getElementById("anch2");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    anch2.classList.add("anch2-checked");
  } else {
    anch2.classList.remove("anch2-checked");
  }
});
const lastone = document.getElementById("last-one");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    lastone.classList.add("last-one-checked");
  } else {
    lastone.classList.remove("last-one-checked");
  }
});
const ournum = document.getElementById("ournum");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    ournum.classList.add("ournum-checked");
  } else {
    ournum.classList.remove("ournum-checked");
  }
});
const card = document.getElementById("card");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    card.classList.add("card-checked");
  } else {
    card.classList.remove("card-checked");
  }
});
const card1 = document.getElementById("card1");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    card1.classList.add("card1-checked");
  } else {
    card1.classList.remove("card1-checked");
  }
});
const card2 = document.getElementById("card2");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    card2.classList.add("card2-checked");
  } else {
    card2.classList.remove("card2-checked");
  }
});
/*  */
/*  */
/*  */
/*  */
/*  */

const videoD = document.getElementById("logo");
const videoL = document.getElementById("logol");

checkbox.addEventListener("change", function () {
  console.log("Checkbox changed:", this.checked);

  if (this.checked) {
    videoD.classList.remove("active");
    videoL.classList.add("active");
  } else {
    videoD.classList.add("active");
    videoL.classList.remove("active");
  }
});
checkbox.dispatchEvent(new Event("change"));
/*  */
/*  */
/*  */
/*  */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
/*  */
/*  */
/*  */
/*  */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const phrases = ["Our University", "NHSNN", "Unique In Algeria", "Best Major"];
const phrases2 = [
  "The National Higher School Of NanoScience And NanoTechnology,A modern school opened in 2023, located in the Sidi-Abdallah University Pole, concerned with studying nanoscience and nanotechnology, which has become a pioneer around the world and most modern technologies are based on it.",
];

const tx = document.querySelector(".text");
const fx = new TextScramble(tx);
const tx2 = document.querySelector(".text2");
const fx2 = new TextScramble(tx2);

let counter = 0;
let counter2 = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};
const next2 = () => {
  fx2.setText(phrases2[counter2]).then(() => {
    setTimeout(next2, 8790);
  });
  counter2 = (counter2 + 1) % phrases2.length;
};
next();
next2();
/*  */
/*  */
/*  */
/*  */
const purptitle = document.querySelector(".purptitle");
const targetWord = "Purpose";
const speed = 200;
const delay = 800;

function animateText() {
  let text = "Our " + targetWord;
  let index = 0;

  function updateText() {
    purptitle.innerHTML =
      text.slice(0, index) + '<span class="cursor">|</span>';
  }

  function type() {
    index++;
    updateText();

    if (index < text.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(() => setTimeout(erase, delay), delay);
    }
  }

  function erase() {
    index--;
    updateText();

    if (index > 4) {
      setTimeout(erase, speed);
    } else {
      text = "Our " + targetWord;
      setTimeout(type, delay);
    }
  }

  setTimeout(type, delay);
}
animateText();
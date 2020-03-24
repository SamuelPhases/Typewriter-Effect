class Typewriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
    this.wait = parseInt(wait, 10);
  }
  type() {
    const currentIndex = this.wordIndex % this.words.length;
    //   console.log(currentIndex);
    const fullTxt = this.words[currentIndex];
    // console.log(fullTxt);

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="text-cursor">${this.txt}</span>`;

    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      typeSpeed = 500;
      this.wordIndex++;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new Typewriter(txtElement, words, wait);
}

// class Typewriter {
//   constructor(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = "";
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
//   }

//   type() {
//     const currentIndex = this.wordIndex % this.words.length;
//     // console.log(currentIndex);
//     const fullTxt = this.words[currentIndex];
//     // console.log(txt);
//     if (this.isDeleting) {
//       this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//       this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.txtElement.innerHTML = `<span class="text-cursor">${this.txt}</span>`;

//     let typeSpeed = 300;
//     if (this.isDeleting) {
//       typeSpeed /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullTxt) {
//       typeSpeed = this.wait;
//       this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === "") {
//       typeSpeed = 500;
//       this.isDeleting = false;
//       this.wordIndex++;
//     }
//     setTimeout(() => this.type(), typeSpeed);
//   }
// }

// document.addEventListener("DOMContentLoaded", init);

// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");

//   new Typewriter(txtElement, words, wait);
// }

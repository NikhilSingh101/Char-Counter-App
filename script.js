const textarea = document.querySelector(".text-area");
const char_element = document.querySelector(".char-number");
const word_element = document.querySelector(".word-number");
const twitter_element = document.querySelector(".twitter-number");
const insta_element = document.querySelector(".insta-number");

let x_char_limit = 280;
let insta_char_limit = 160;

// change the color function => thapa
const colorChange = (name, count) => {
  if (name === "twitter") {
    if (count > 280) {
      twitter_element.classList.add("change-color");
    } else {
      twitter_element.classList.remove("change-color");
    }
  } else {
    if (count > 160) {
      insta_element.classList.add("change-color");
    } else {
      insta_element.classList.remove("change-color");
    }
  }
};

// char function
const charCounter = (e) => {
  console.log(e);
  char_element.innerText = e.target.value.length;
};

// words function
const wordCounter = (e) => {
  let str = e.target.value;
  str = str.split(" ");
  word_element.innerText = str.length;
  console.log(str);
}

// twitter function
const twitterCounter = (e) => {
  twitter_element.innerText = x_char_limit - e.target.value.length;
  colorChange("twitter", e.target.value.length);
};

// insta function
const instaCounter = (e) => {
  insta_element.innerText = insta_char_limit - e.target.value.length;
  colorChange("instagram", e.target.value.length);
};

// main function
textarea.addEventListener("input", (e) => {
  charCounter(e);
  wordCounter(e);
  twitterCounter(e);
  instaCounter(e);
});

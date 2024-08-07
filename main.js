const button = document.querySelector("button.show"),
  toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

const txt = document.querySelector(".message .text.text-1");

let timer1, timer2;

button.addEventListener("click", () => {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
const colors = document.querySelectorAll(".box span");

// check if there is local storage option
let mainColors = localStorage.getItem("color_option");
let pulseColors = localStorage.getItem("color_pulse");

if (mainColors !== undefined && pulseColors !== undefined) {
  console.log(pulseColors);
  // set colors on root
  document.documentElement.style.setProperty("--main-color", mainColors);
  document.documentElement.style.setProperty("--pulse-color", pulseColors);

  // check for active class
  document.querySelectorAll(".box span").forEach((e) => {
    e.classList.remove("active");
    // add active class on element with data-color === local storage item
    if (e.dataset.color === mainColors) {
      e.classList.add("active");
    }
  });
}

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    // set colors on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    document.documentElement.style.setProperty(
      "--pulse-color",
      e.target.dataset.pulse
    );

    // set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);
    localStorage.setItem("color_pulse", e.target.dataset.pulse);

    e.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });

    // add active class on target
    e.target.classList.add("active");
  });
});

const darkBtn = document.querySelector("button.dark");
const lightBtn = document.querySelector("button.light");

let theme = localStorage.getItem("theme");

console.log(theme);

if (theme !== undefined) {
  toast.classList.add(theme);
}

darkBtn.addEventListener("click", () => {
  toast.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

lightBtn.addEventListener("click", () => {
  toast.classList.remove("dark");
  localStorage.setItem("theme", "light");
});

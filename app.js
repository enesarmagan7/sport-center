const navbarBG = document.querySelector(".navnav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 56) {
    navbarBG.classList.add("navbar-scrolled");
  } else {
    navbarBG.classList.remove("navbar-scrolled");
  }
});

const yoga = document.getElementById("yoga");
const group = document.getElementById("group");
const solo = document.getElementById("solo");
const stretching = document.getElementById("stretching");

const lessonTitle = document.querySelector(".lessonTitle");
const lessonDesc = document.querySelector(".lessonDesc");
const lessonSession = document.querySelector(".lessonSession");
const lessonWhen = document.querySelector(".lessonWhen");
const lessonImg = document.querySelector(".lessonImg");

const classes = document.querySelector(".classesAdd");

yoga.addEventListener("click", () => {
  lessonTitle.innerHTML = "Why are your Yoga?";
  lessonDesc.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  lessonSession.innerHTML = "When comes Yoga Your Time";
  lessonWhen.innerHTML =
    "<br> Saturday-Sunday 10:00am-11:00am <br> <br> Monday-Tuesday 8:00am-9:00am <br> <br> Wednesday-Thursday 6:00am-7:00am";
  lessonImg.src = "/images/yoga.jpg";
});

group.addEventListener("click", () => {
  lessonTitle.innerHTML = "Why are your Group";
  lessonDesc.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  lessonSession.innerHTML = "When comes Group Your Time";
  lessonWhen.innerHTML =
    "<br> Saturday-Sunday 10:00am-11:00am <br> <br> Monday-Tuesday 8:00am-9:00am <br> <br> Wednesday-Thursday 6:00am-7:00am";
  lessonImg.src = "/images/group.webp";
});

solo.addEventListener("click", () => {
  lessonTitle.innerHTML = "Why are your Solo";
  lessonDesc.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  lessonSession.innerHTML = "When comes Solo Your Time";
  lessonWhen.innerHTML =
    "<br> Saturday-Sunday 10:00am-11:00am <br> <br> Monday-Tuesday 8:00am-9:00am <br> <br> Wednesday-Thursday 6:00am-7:00am";
  lessonImg.src = "/images/solo.jpg";
});

stretching.addEventListener("click", () => {
  lessonTitle.innerHTML = "Why are your Stretching";
  lessonDesc.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
  lessonSession.innerHTML = "When comes Stretching Your Time";
  lessonWhen.innerHTML =
    "<br> Saturday-Sunday 10:00am-11:00am <br> <br> Monday-Tuesday 8:00am-9:00am <br> <br> Wednesday-Thursday 6:00am-7:00am";
  lessonImg.src = "/images/stret.webp";
});

const trainer1 = document.querySelector(".trainer1");
const trainer2 = document.querySelector(".trainer2");
const trainer3 = document.querySelector(".trainer3");
const trainerNane = document.querySelector("#trainerName");
const trainerTitle = document.querySelector("#trainerTitle");

trainer1.addEventListener("mouseover", () => {
  var t1name = "Elizabeth Doe";
  var t1title = "Yoga Trainer";

  var add = `<div class="boxtitle">
    <h6 id="trainerName">${t1name}</h6>
    <h6 id="trainerTitle">${t1title}</h6>
    </div>`;
  if (trainer1.innerHTML.includes(add)) {
    return;
  }
  trainer1.innerHTML += add;
});

trainer2.addEventListener("mouseover", () => {
  var t2name = "John Doe";
  var t2title = "Stretching Trainer";

  var add = `<div class="boxtitle">
    <h6 id="trainerName">${t2name}</h6>
    <h6 id="trainerTitle">${t2title}</h6>
    </div>`;
  if (trainer2.innerHTML.includes(add)) {
    return;
  }
  trainer2.innerHTML += add;
});

trainer3.addEventListener("mouseover", () => {
  var t3name = "Jane Doe";
  var t3title = "Cardio Trainer";

  var add = `<div class="boxtitle">
    <h6 id="trainerName">${t3name}</h6>
    <h6 id="trainerTitle">${t3title}</h6>
    </div>`;

  if (trainer3.innerHTML.includes(add)) {
    return;
  }
  trainer3.innerHTML += add;
});

const cm = document.getElementById("cm");
const kg = document.getElementById("kg");
const bmiImg = document.querySelector(".bmiImg");
const arrow = document.querySelector(".arrow");

cm.addEventListener("input", () => { 
  bmiCm = cm.value;
  bmiKg = kg.value;

  let result = (bmiKg / (bmiCm / 100) ** 2).toFixed(2);
  switch (true) {
    case result >= 40:
      arrow.style.marginLeft = "75%";
      break;
    case result >= 30 && result < 40:
      arrow.style.marginLeft = "58%";
      break;
    case result >= 25 && result < 30:
      arrow.style.marginLeft = "42%";
      break;
    case result >= 18.5 && result < 25:
      arrow.style.marginLeft = "25%";
      break;
    case result < 18.5:
      arrow.style.marginLeft = "10%";
      break;
  }
});

kg.addEventListener("input", () => { 
  bmiCm = cm.value;
  bmiKg = kg.value;

  let result = (bmiKg / (bmiCm / 100) ** 2).toFixed(2);
  switch (true) {
    case result >= 40:
      arrow.style.marginLeft = "75%";
      break;
    case result >= 30 && result < 40:
      arrow.style.marginLeft = "58%";
      break;
    case result >= 25 && result < 30:
      arrow.style.marginLeft = "42%";
      break;
    case result >= 18.5 && result < 25:
      arrow.style.marginLeft = "25%";
      break;
    case result < 18.5:
      arrow.style.marginLeft = "10%";
      break;
  }
});



const hamburger = document.querySelector(".hamburger");
const hmbrgr = document.querySelector(".hmbrgr");

hamburger.addEventListener("click", () => {
  if (hmbrgr.classList.contains("d-none")) {
    hmbrgr.classList.remove("d-none");
  } else {
    hmbrgr.classList.add("d-none");
  }
});
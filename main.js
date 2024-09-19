const form = document.querySelector(".quiz_form");
let result = document.querySelector(".result");
let resultImg = document.querySelector(".popup img");
let percentage = document.querySelector(".percentage");
const box1Lbl = document.querySelectorAll("#box1 input");
const box2Lbl = document.querySelectorAll("#box2 input");
const box3Lbl = document.querySelectorAll("#box3 input");
const box4Lbl = document.querySelectorAll("#box4 input");
const box5Lbl = document.querySelectorAll("#box5 input");
const box6Lbl = document.querySelectorAll("#box6 input");

box1Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("box2").style.display = "block";
      document.getElementById("box2").scrollIntoView();
   });
});

box2Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("box3").style.display = "block";
      document.getElementById("box3").scrollIntoView();
   });
});

box3Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("box4").style.display = "block";
      document.getElementById("box4").scrollIntoView();
   });
});

box4Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("box5").style.display = "block";
      document.getElementById("box5").scrollIntoView();
   });
});

box5Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("box6").style.display = "block";
      document.getElementById("box6").scrollIntoView();
   });
});

box6Lbl.forEach((input) => {
   input.addEventListener("click", function () {
      // console.log("aaa");
      document.getElementById("submit").style.display = "block";
      document.querySelector(".quiz_form #submit").scrollIntoView();
   });
});

form.addEventListener("submit", (event) => {
   event.preventDefault();

   if (
      form.q1.value == "" ||
      form.q2.value == "" ||
      form.q3.value == "" ||
      form.q4.value == "" ||
      form.q5.value == "" ||
      form.q6.value == ""
   ) {
      return alert("YOU DIDN'T ANSWER ALL QUESTIONS🙁. PLEASE TRY AGAIN!");
   } else {
      const userAnswers = [
         form.q1.value,
         form.q2.value,
         form.q3.value,
         form.q4.value,
         form.q5.value,
         form.q6.value,
      ];

      //    Count occurences of each answer
      const counter = {};
      userAnswers.forEach((answer) => {
         if (counter[answer]) {
            counter[answer] += 1;
         } else {
            counter[answer] = 1;
         }
      });

      //    Answer with the biggest number of occurences
      const maxKey = Object.entries(counter).reduce((maxEntry, currentEntry) =>
         currentEntry[1] > maxEntry[1] ? currentEntry : maxEntry
      )[0];

      let percentScore = Math.round((counter[maxKey] * 100) / 6, 0);

      switch (maxKey) {
         case "A":
            result.textContent = "RISKY GAMBLER";
            resultImg.src = "./images/A.png";
            break;
         case "B":
            result.textContent = "GEMBA INVESTIGATOR";
            resultImg.src = "./images/B.png";
            break;
         case "C":
            result.textContent = "TECH SAVVY INNOVATOR";
            resultImg.src = "./images/C.png";
            break;
         case "D":
            result.textContent = "INNOVATIVE THINKER";
            resultImg.src = "./images/D.png";
            break;
         case "E":
            result.textContent = "DATA ANALYST";
            resultImg.src = "./images/E.png";
            break;
         case "F":
            result.textContent = "SOCIAL CONNECTOR";
            resultImg.src = "./images/F.png";
            break;
      }

      toggle();

      let output = 0;
      const timer = setInterval(() => {
         percentage.textContent = `${output}%`;
         if (output === percentScore) {
            clearInterval(timer);
         } else {
            output++;
         }
      }, 30);
   }
});

const toggle = () => {
   let toggle = document.querySelector(".popup-container");
   toggle.classList.toggle("toggle");
   document.querySelector("button.btn_reset").style.display = "block";
};

const removeAnswers = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;

   setInterval(() => {
      location.reload();
   }, 1000);
};

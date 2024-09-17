const form = document.querySelector(".quiz_form");
let result = document.querySelector(".result");
let resultImg = document.querySelector(".popup img");
let percentage = document.querySelector(".percentage");

form.addEventListener("submit", (event) => {
   event.preventDefault();

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

   toggle();

   let output = 0;
   const timer = setInterval(() => {
      percentage.textContent = `${output}%`;
      if (output === percentScore) {
         clearInterval(timer);
      } else {
         output++;
      }
   }, 20);

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
         result.textContent = "RISKY GAMBLER";
         resultImg.src = "./images/E.png";
         break;
      case "F":
         result.textContent = "SOCIAL CONNECTOR";
         resultImg.src = "./images/F.png";
         break;
   }
});

const toggle = () => {
   let toggle = document.querySelector(".popup-container");
   toggle.classList.toggle("toggle");
};

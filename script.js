const callHistory = [];
const historyContainer = document.getElementById("historyContainer");
const clearBtn = document.getElementById("clearBtn");




// get number from element by id
const getInnerNumber = (id) => {
  const element = document.getElementById(id);
  const text = element.innerText;
  const number = parseInt(text);
  return number;
};




// setInnerText number
const setInnerNumber = (id, number) => {
  const element = document.getElementById(id);
  element.innerHTML = number;
};





// event listener
const favoriteBtns = document.getElementsByClassName("favorite-btn");

for (const btn of favoriteBtns) {
  btn.addEventListener("click", function () {
    const current = getInnerNumber("heart-count");
    const updated = current + 1;
    setInnerNumber("heart-count", updated);
  });
}




function renderHistory() {
  historyContainer.innerText = "";

  for (const call of callHistory) {
    const card = document.createElement("div");
    card.className = "text-sm p-4 bg-gray-50 rounded-lg mb-3";

    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div class=" ">
          <p class="mb-0">${call?.title}</p>
          <p class="mb-0">${call?.number}</p>
        </div>
        <span>${call?.time}</span>
      </div>
    `

    historyContainer.appendChild(card)
  }
}





const callButtons = document.querySelectorAll(".callBtn");

callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // const card = btn.closest(".card");
    const card = btn.parentNode.parentNode;

    const title = card.querySelector(".callTitle").innerText;
    const number = card.querySelector(".callNumber").innerText;

    let starCount = parseInt(document.getElementById("coins").innerText);

    if (starCount > 0) {
      alert(`📞 Calling ${title}, ${number}`);

      const updateStar = starCount - 20;
      setInnerNumber("coins", Math.max(0, updateStar));
      callHistory.unshift({
        title: title,
        number: number,
        time: new Date().toLocaleTimeString()
      });

      renderHistory();

    } else {
      alert("❌ You don't have enough coins! required at least 20 coins to a call. ");
    }

  });

});








// Copy button logic
const copyButtons = document.querySelectorAll(".copy-btn");
const copyCountEl = document.getElementById("copy-count");

let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener("click", async function () {
    const card = btn.closest(".card");
    const number = card.querySelector(".callNumber").innerText.trim();

    try {
      await navigator.clipboard.writeText(number);

      btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
      setTimeout(() => {
        btn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
      }, 1200);

      copyCount++;
      copyCountEl.innerText = `${copyCount} Copy`;

    } catch (err) {
      console.error("Copy failed:", err);
      alert("❌ Copy failed. Please try again.");
    }
  });
});










clearBtn.addEventListener("click", () => {
  callHistory.length = 0;
  renderHistory();

  document.getElementById("coins").innerText = 100;
});
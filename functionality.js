// ==================== Navbar 
let heartCount = 0;
let copyCount = 2; 
let coinCount = 100;

//  HTML elements
let heartCountEl = document.getElementById("heartCount");
let copyCountEl = document.getElementById("copyCount");
let coinCountEl = document.getElementById("coinCount");
let historyList = document.querySelector("aside ul");
let clearBtn = document.querySelector("aside button");

// =========== HEART ICON ============
let heartIcons = document.querySelectorAll(".card-heart");
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function () {
    heartCount++;
    heartCountEl.innerText = heartCount + " ❤️";
  });
}

// CALL BUTTONS =====
let callButtons = document.querySelectorAll(".call-btn");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let card = callButtons[i].closest(".card");
    let serviceName = card.querySelector("h3").innerText;
    let serviceNumber = card.querySelector(".service-number").innerText;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    // Deduct coins
    coinCount = coinCount - 20;
    coinCountEl.innerText = coinCount + " 💰";

    // Show alert
    alert("Calling " + serviceName + " at " + serviceNumber);

    // Get current time
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Add to call history
    let li = document.createElement("li");
    li.className = "p-3";
    li.innerText = serviceName + " — " + serviceNumber + " ";
    let span = document.createElement("span");
    span.className = "text-gray-500";
    span.innerText = time;
    li.appendChild(span);

    historyList.appendChild(li);
  });
}

// ============ COPY BUTTONS ===========
let copyButtons = document.querySelectorAll(".copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    let card = copyButtons[i].closest(".card");
    let serviceNumber = card.querySelector(".service-number").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(serviceNumber);

    // Show alert
    alert("Copied " + serviceNumber + " to clipboard!");

    // Increase copy count
    copyCount++;
    copyCountEl.innerText = copyCount + " Copy";
  });
}

// ============ CLEAR HISTORY ============
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});

let donationCount = parseInt(localStorage.getItem("donationCount")) || 0;// 👇 Load progress from local storage on page load
window.addEventListener("load", () => {
  const saved = parseInt(localStorage.getItem("donationCount")) || 0;
  const percent = Math.min((saved / 100) * 100, 100);
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${saved} / 100 donations`;
});

// 👇 Form submit handler
document.getElementById("donationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const location = document.getElementById("location").value;
  const emailField = document.getElementById("email");
  const email = emailField ? emailField.value : ""; // optional if you added it

  if (name && item && location) {
    document.getElementById("donationForm").reset();
    document.getElementById("thankYouMsg").style.display = "block";
    generateBadge(name);
    updateProgress();
    updateSocialLinks();
  }
});

// 👇 Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// 👇 Progress tracker

function updateProgress() {
  const goal = 100;
  donationCount++;
  localStorage.setItem("donationCount", donationCount);

  const percent = Math.min((donationCount / goal) * 100, 100);
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${donationCount} / ${goal} donations`;
}

// 👇 Social share links
function updateSocialLinks() {
  const shareMessage = `I just donated through DonateKind! 💛 Join me at https://ibm-website-creation.github.io/group-project/`;
  document.getElementById("whatsappShare").href = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
  document.getElementById("twitterShare").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
}

// 👇 Badge generator
function generateBadge(donorName) {
  const canvas = document.getElementById("badgeCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background Gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#fff4e6");
  gradient.addColorStop(1, "#ffe0b3");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = "#d4af37";
  ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, canvas.width - 10, canvas.height - 10);

  // Text
  ctx.fillStyle = "#333";
  ctx.font = "28px Georgia";
  ctx.fillText("💛 Certificate of Kindness 💛", 40, 60);

  ctx.font = "20px Arial";
  ctx.fillText("This certificate is proudly awarded to", 60, 110);

  ctx.font = "26px 'Segoe UI', sans-serif";
  ctx.fillStyle = "#cc6600";
  ctx.fillText(donorName || "Anonymous", 110, 160);

  ctx.font = "18px Arial";
  ctx.fillStyle = "#333";
  ctx.fillText("For donating with love and compassion ❤️", 50, 210);

  ctx.font = "14px Courier New";
  ctx.fillStyle = "#777";
  ctx.fillText("DonateKind.org • Making the world better", 70, 270);
}

// 👇 Download badge function
function downloadBadge() {
  const canvas = document.getElementById("badgeCanvas");
  const link = document.createElement("a");
  link.download = "donation_badge.png";
  link.href = canvas.toDataURL();
  link.click();
}


  


  

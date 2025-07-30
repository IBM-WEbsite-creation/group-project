document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const location = document.getElementById("location").value;
if (name && item && location) { 
  document.getElementById("donationForm").reset();
  document.getElementById("thankYouMsg").style.display = "block";
  generateBadge(name); // ⭐ show the badge with their name
}

});
document.getElementById("darkToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
function generateBadge(donorName) {
  const canvas = document.getElementById("badgeCanvas");
  const ctx = canvas.getContext("2d");

  // Clear previous badge
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "#fff8dc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = "#ffcc00";
  ctx.lineWidth = 8;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = "#333";
  ctx.font = "24px Arial";
  ctx.fillText("Kindness Champion", 100, 80);

  // Emoji
  ctx.font = "48px Arial";
  ctx.fillText("💛", 170, 140);

  // Name
  ctx.font = "20px Arial";
  ctx.fillStyle = "#ff8800";
  ctx.fillText(`Donated by: ${donorName}`, 90, 200);
}

function downloadBadge() {
  const canvas = document.getElementById("badgeCanvas");
  const link = document.createElement("a");
  link.download = "donation_badge.png";
  link.href = canvas.toDataURL();
  link.click();
}


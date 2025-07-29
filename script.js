document.getElementById("donationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const location = document.getElementById("location").value;

  if (name && item && location) { 
    document.getElementById("donationForm").reset();
    document.getElementById("thankYouMsg").style.display = "block";
  }
});

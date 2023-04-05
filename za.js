// Show the popup after a delay of 2 seconds
setTimeout(function() {
    document.getElementById("popup-container").style.display = "flex";
  }, 2000);
  
  // Close the popup when the close button is clicked
  document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup-container").style.display = "none";
  });
  
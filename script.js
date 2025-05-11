// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const dynamicText = document.getElementById("dynamicText");
  dynamicText.textContent = "The text has been changed dynamically!";
  dynamicText.style.color = "blue"; // Modify CSS style
  dynamicText.style.fontSize = "1.2rem";
});

// Add or remove an element when a button is clicked
document.getElementById("toggleElementBtn").addEventListener("click", function () {
  const existing = document.getElementById("extraElement");
  if (existing) {
    existing.remove();
  } else {
    const newElement = document.createElement("p");
    newElement.id = "extraElement";
    newElement.textContent = "This element was added dynamically!";
    newElement.style.backgroundColor = "#dff0d8";
    newElement.style.padding = "0.5rem";
    document.querySelector("main").appendChild(newElement);
  }
})

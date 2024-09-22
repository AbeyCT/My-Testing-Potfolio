 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle active class on hamburger
  });


const heading = "What Clients Say";
const words = heading.split(" ");
const headingElement = document.getElementById("clients-say-heading");

let index = 0;

function displayWords() {
  headingElement.textContent = ""; // Clear existing text
  index = 0; // Reset index for the new cycle

  function showWord() {
    if (index < words.length) {
      headingElement.textContent += words[index] + " ";
      index++;
      setTimeout(showWord, 500); // Adjust the timing (500ms) as needed
    } else {
      setTimeout(displayWords, 2000); // Wait before starting again (2 seconds)
    }
  }

  showWord();
}

displayWords();


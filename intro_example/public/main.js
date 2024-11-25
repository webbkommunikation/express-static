const messageParagraph = document.getElementById("message");
const form = document.getElementById("post-request");

fetch("/greeting")
  .then((response) => response.json())
  .then((response) => (messageParagraph.textContent = response.message));

async function postMessage(message) {
  await fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: message }),
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageText = document.getElementById("message-text");
  postMessage(messageText.value);
});

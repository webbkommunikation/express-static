const messageParagraph = document.getElementById("message");

// Motsvarande med fetch
/* fetch("/greeting")
    .then((response) => response.json())
    .then((response) => messageParagraph.textContent = response.message)
*/

async function fetchMessage() {
    const response = await fetch("/greeting");
    const data = await response.json();
    messageParagraph.textContent = data.message;
}

fetchMessage();

async function postMessage() {
    await fetch("/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Client sent this message" }),
    });
}

postMessage();

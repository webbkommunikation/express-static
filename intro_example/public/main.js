const messageParagraph = document.getElementById("message")

// Motsvarande med fetch
/* fetch("/greeting")
    .then((response) => response.json())
    .then((response) => messageParagraph.textContent = response.message)
*/

async function fetchMessage() {
    const response = await fetch("/greeting")
    const data = await response.json()
    messageParagraph.textContent = data.message
}

fetchMessage()
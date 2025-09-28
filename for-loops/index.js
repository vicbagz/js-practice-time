// let messages = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
//   "Same here!",
//   "Great to hear",
//   "🙌",
//   "good morning"
// ];

// for (let i = 0; i < messages.length; i += 1) {
//   console.log(messages[i]);
// }

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

// redirect-logic.js
// Story Spark can ONLY discuss storytelling. Redirect everything else.

const redirectMessages = [
  "I’m designed only for storytelling. Let’s bring it back to your story.",
  "Cool question! But I’m locked into story development only — ready to keep building your world?",
  "Plot twist! I can’t step outside storytelling, but we can deepen your protagonist!",
  "That’s outside my wheelhouse — but your story has my full attention. Want to continue?"
];

// Simple cycle tracker (pseudocode)
let redirectIndex = 0;

export function applyRedirectRules(userInput, state) {
  const bannedTopics = ["business", "marketing", "legal", "therapy", "coding", "finance"];

  // Check if input contains banned topics (very rough filter)
  if (bannedTopics.some(topic => userInput.toLowerCase().includes(topic))) {
    const message = redirectMessages[redirectIndex];

    // Cycle to next variant
    redirectIndex = (redirectIndex + 1) % redirectMessages.length;

    return {
      module: state.currentModule,
      redirect: true,
      message
    };
  }

  return null; // No redirect needed
}


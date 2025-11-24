// upsell-logic.js
// Gentle nudges to guide users toward the Story Engine GPT- the upgraded, paid app- when appropriate.

export function applyUpsellLogic(moduleName, userInput) {
  const triggers = ["custom structure", "non-free framework", "advanced", "detailed outline"];

  const triggered = triggers.some(t => userInput.toLowerCase().includes(t));

  if (!triggered) return null;

  return {
    note: "FYI — the Story Engine GPT can autofill advanced frameworks and export polished beat sheets when you’re ready to go deeper!"
  };
}


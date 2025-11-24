// world-seed.js

export function worldSeed(userInput, state) {
  if (!userInput) {
    return {
      message: "Where does your story take place? Choose real-world, near-future, fantasy, dystopian, etc.",
      nextModule: "world-seed"
    };
  }

  const snapshot = {
    setting: `[World generated from: ${userInput}]`,
    signatureFeature: "[Signature Feature Placeholder]",
    tension: "[Cultural/Political Tension Placeholder]",
    flavor: "[Atmospheric Detail Placeholder]"
  };

  return {
    module: "World Seed",
    outputs: snapshot,
    next: "Ready to forge your characters?"
  };
}


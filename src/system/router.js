// router.js (hybrid pseudocode)
// Defines the Story Spark module flow (Spark → World → Characters → Plot → Wordsmith)

export function getNextModule(currentModule, state, result) {
  // If the module explicitly sets the next module, use that
  if (result && result.nextModule) return result.nextModule;

  switch (currentModule) {
    case "idea-spark":
      return "world-seed";

    case "world-seed":
      return "character-forge";

    case "character-forge":
      return "plot-skeleton";

    case "plot-skeleton":
      return "wordsmith-lab";

    case "wordsmith-lab":
      return "complete"; // End of flow

    default:
      return "idea-spark"; // Fallback
  }
}


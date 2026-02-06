import { DOG_API_BASE_URL, DOG_API_KEY } from "./constants";

const FALLBACK_DOG_FACTS = [
  "Dogs’ noses are wet to help absorb scent chemicals.",
  "A Greyhound could beat a Cheetah in a long-distance race.",
  "Three dogs survived the sinking of the Titanic.",
  "Dogs can learn over 1000 words.",
  "The Basenji is the only barkless dog.",
  "Dalmatians are born completely white and develop spots as they age.",
  "A dog’s sense of smell is at least 40x better than a human’s.",
  "Dogs can understand up to 250 words and gestures.",
  "Newfoundlands have webbed feet and are great swimmers.",
];

export async function getDogFacts(count = 3) {
  try {
    const response = await fetch(`${DOG_API_BASE_URL}/breeds`, {
      headers: {
        "x-api-key": DOG_API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching dog data: ${response.status}`);
    }

    const data = await response.json();

    const facts = data
      .slice(0, count)
      .map(
        (dog) =>
          `${dog.name} is a breed from ${
            dog.origin || "an unknown origin"
          } and is known for being ${
            dog.temperament?.toLowerCase() || "unique"
          }.`
      );

    console.log("Dog facts fetched:", facts);
    return facts.length ? facts : FALLBACK_DOG_FACTS;
  } catch (error) {
    console.error("Failed to fetch dog data:", error);
    return FALLBACK_DOG_FACTS;
  }
}

/**
 * TokenFlow Semantic Caching (Simulated)
 * Returns 100% cost savings for similar queries
 */

// Simple in-memory cache for demo/prototype
const cacheStore = new Map();

/**
 * Gets a cached response for a prompt
 * In production, this would use vector embeddings and a similarity threshold (e.g. 0.95)
 */
export async function getCachedResponse(prompt) {
    const normalizedPrompt = prompt.toLowerCase().trim();

    if (cacheStore.has(normalizedPrompt)) {
        console.log(`[TokenFlow Cache] Semantic match found! Serving from local cache ($0.00 cost)`);
        return {
            content: cacheStore.get(normalizedPrompt),
            cached: true,
            savings: 1.0 // 100% savings
        };
    }

    return null;
}

export function setCacheResponse(prompt, response) {
    const normalizedPrompt = prompt.toLowerCase().trim();
    cacheStore.set(normalizedPrompt, response);
}

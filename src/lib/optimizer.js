/**
 * TokenFlow Prompt Optimization Engine
 * Handles prompt compression and intelligent model selection
 */

const STOP_WORDS = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'to', 'of', 'in', 'at']);

/**
 * Compresses a prompt by removing redundant whitespace and optionally stop words
 * @param {string} text 
 * @param {boolean} aggressive 
 * @returns {string} compressed text
 */
export function compressPrompt(text, aggressive = false) {
    if (!text) return text;

    // Basic: Remove extra whitespaces/newlines
    let compressed = text.replace(/\s+/g, ' ').trim();

    if (aggressive) {
        // Aggressive: Remove common stop words (use with caution as it can change meaning)
        const words = compressed.split(' ');
        compressed = words
            .filter(word => !STOP_WORDS.has(word.toLowerCase()))
            .join(' ');
    }

    const savings = 1 - (compressed.length / text.length);
    console.log(`[TokenFlow Optimizer] Compressed prompt by ${(savings * 100).toFixed(1)}%`);

    return compressed;
}

/**
 * Simple Intent-based routing logic
 * Determines if a request can be handled by a cheaper model
 */
export function determineOptimalModel(messages, preferredProvider) {
    const lastMessage = messages[messages.length - 1]?.content || '';

    // Logic: If the task looks like simple classification, summarization, or greeting, use mini
    const simpleTaskPatterns = [
        /summarize/i,
        /translate/i,
        /extract/i,
        /sentiment/i,
        /hello/i,
        /classify/i
    ];

    const isSimple = simpleTaskPatterns.some(pattern => pattern.test(lastMessage));

    if (isSimple) {
        console.log(`[TokenFlow Optimizer] Simple task detected. Routing to cost-optimized model.`);
        return preferredProvider === 'openai' ? 'gpt-4o-mini' : 'claude-3-haiku';
    }

    return null; // Stick to original model
}

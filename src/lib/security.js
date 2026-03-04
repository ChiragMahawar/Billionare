/**
 * TokenFlow Security & Compliance Layer
 * Handles PII scrubbing and sensitive data masking
 */

const PII_PATTERNS = {
    email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
    creditCard: /\b(?:\d[ -]*?){13,16}\b/g,
    ssn: /\b\d{3}-\d{2}-\d{4}\b/g,
    phoneNumber: /\b(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}\b/g,
    ipAddress: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g
};

/**
 * Scrubs PII from a string
 * @param {string} text 
 * @returns {string} masked text
 */
export function scrubPII(text) {
    if (!text) return text;

    let scrubbed = text;

    for (const [key, pattern] of Object.entries(PII_PATTERNS)) {
        scrubbed = scrubbed.replace(pattern, (match) => {
            console.log(`[TokenFlow Security] Masked ${key} detected.`);
            return `[MASKED_${key.toUpperCase()}]`;
        });
    }

    return scrubbed;
}

/**
 * Scrubs PII from an entire OpenAI-style messages array
 */
export function scrubMessages(messages) {
    return messages.map(msg => ({
        ...msg,
        content: typeof msg.content === 'string' ? scrubPII(msg.content) : msg.content
    }));
}

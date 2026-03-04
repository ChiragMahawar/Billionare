import { NextResponse } from 'next/server';
import { scrubMessages } from '@/lib/security';
import { compressPrompt, determineOptimalModel } from '@/lib/optimizer';
import { getCachedResponse, setCacheResponse } from '@/lib/cache';

/**
 * TokenFlow Unified AI Gateway
 * POST /api/proxy
 */
export async function POST(req) {
    try {
        const body = await req.json();
        const { messages, model, stream = false, provider_preference = 'openai' } = body;

        console.log(`[TokenFlow Gateway] Incoming request for model: ${model}`);

        // 1. Semantic Cache Lookup
        const lastUserMessage = messages[messages.length - 1]?.content;
        const cacheHit = await getCachedResponse(lastUserMessage);
        if (cacheHit) {
            return NextResponse.json({
                id: 'tf-cache-' + Date.now(),
                object: 'chat.completion',
                created: Math.floor(Date.now() / 1000),
                model: model,
                choices: [{
                    message: { role: 'assistant', content: cacheHit.content },
                    finish_reason: 'stop'
                }],
                usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0, tf_savings: '100%' },
                tf_metadata: { cached: true, savings: '$0.00' }
            });
        }

        // 2. Security Middleware: Mask PII
        const securedMessages = scrubMessages(messages);

        // 3. Optimization Phase 1: Prompt Compression
        const optimizedMessages = securedMessages.map(msg => ({
            ...msg,
            content: msg.role === 'user' ? compressPrompt(msg.content) : msg.content
        }));

        // 4. Optimization Phase 2: Intelligent Model Routing
        const optimalModel = determineOptimalModel(optimizedMessages, provider_preference);
        const finalModel = optimalModel || model;

        if (optimalModel) {
            console.log(`[TokenFlow Gateway] Auto-routing from ${model} -> ${optimalModel} for efficiency.`);
        }

        // 5. Provider Execution (Simulated for Demo)
        // In production, this would use fetch() to OpenAI/Anthropic/etc.
        const simulatedResponse = `This is a secured and optimized response from TokenFlow Gateway using ${finalModel}. PII has been scrubbed and tokens saved.`;

        // Save to cache for future requests
        setCacheResponse(lastUserMessage, simulatedResponse);

        return NextResponse.json({
            id: 'tf-' + Date.now(),
            object: 'chat.completion',
            created: Math.floor(Date.now() / 1000),
            model: finalModel,
            choices: [{
                message: { role: 'assistant', content: simulatedResponse },
                finish_reason: 'stop'
            }],
            usage: { prompt_tokens: 150, completion_tokens: 50, total_tokens: 200, tf_savings: '35%' },
            tf_metadata: {
                pii_scrubbed: true,
                compressed: true,
                routed_to: finalModel
            }
        });

    } catch (error) {
        console.error('[TokenFlow Gateway Error]', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

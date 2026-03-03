import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'Gemini API key not configured' },
                { status: 500 }
            );
        }

        // Use the recommended model for text
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        // Convert our history format to Gemini's format
        const formattedHistory = (history || []).map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({
            history: [
                {
                    role: 'user',
                    parts: [{ text: 'You are the AI Concierge for Aura Kinetics, an elite fitness sanctuary focusing on clinical-grade biomechanics, elite conditioning, and data-driven recovery. Be concise, professional, intense, and elitist but helpful. Keep responses to 1-3 sentences.' }],
                },
                {
                    role: 'model',
                    parts: [{ text: 'Understood. I am the Aura Kinetics AI Concierge. How may I optimize your trajectory today?' }],
                },
                ...formattedHistory,
            ]
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        return NextResponse.json({ text: responseText });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { error: 'Failed to process chat message' },
            { status: 500 }
        );
    }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { chatInput, sessionId } = body;

        const response = await fetch("https://server3.automationlearners.pro/webhook/6652d389-f860-43c3-85f0-619fc8c38877/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: "sendMessage",
                sessionId,
                chatInput
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Webhook failed: ${response.status} ${response.statusText}`, errorText);
            return NextResponse.json({ error: `Webhook failed: ${response.status} ${response.statusText}`, details: errorText }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Error in chat API route:", error);
        return NextResponse.json({ error: "Failed to process chat request", details: error.message }, { status: 500 });
    }
}

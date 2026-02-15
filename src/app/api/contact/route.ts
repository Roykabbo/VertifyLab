import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwD6XXdyx0e6M38EPc2AMr20wWy7tnaQaF9LZIpGAJ6Q90Dc7g_FaUpI_w9Fnn09vX6SQ/exec";

        if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
            console.warn("Contact form submission blocked: Google Script URL not configured.");
            return NextResponse.json({ error: "Configuration Error: Script URL missing" }, { status: 500 });
        }

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            redirect: "follow",
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Google Sheet webhook failed: ${response.status} ${response.statusText}`, errorText);
            return NextResponse.json({ error: `Failed to submit to Google Sheet: ${response.status} ${response.statusText}`, details: errorText }, { status: response.status });
        }

        // Google Apps Script might return a redirect (302) which fetch follows.
        // Or it might return the JSON content directly.
        // We'll try to parse JSON, but if it fails (e.g. HTML response), we'll return a success status if response.ok is true.
        try {
            const data = await response.json();
            return NextResponse.json(data);
        } catch (e) {
            console.warn("Could not parse Google Script response as JSON, but request was OK:", e);
            return NextResponse.json({ result: "success", note: "Response parsing failed but status was OK" });
        }
    } catch (error: any) {
        console.error("Error in contact API route:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}

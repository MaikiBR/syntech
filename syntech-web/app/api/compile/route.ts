import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<void | Response> {
    const { text } = await request.json();

    return new Promise<void | Response>((resolve) => {
        const command = `python api-python/main.py "${text}"`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                resolve(NextResponse.json({ error: error.message }, { status: 500 }));
                return;
            }
            if (stderr) {
                console.error(`Stderr: ${stderr}`);
                resolve(NextResponse.json({ error: stderr }, { status: 500 }));
                return;
            }
            resolve(NextResponse.json({ result: stdout }, { status: 200 }));
        });
    });
}

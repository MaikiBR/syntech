const { exec } = require("child_process");
const { NextResponse } = require("next/server");

export async function POST(request: Request) {
    const { text } = await request.json();

    return new Promise((resolve) => {
        const command = `python api-python/main.py "${text}"`;
        exec(command, (error: { message: any; }, stdout: any, stderr: any) => {
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
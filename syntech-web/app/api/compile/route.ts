const { exec } = require("child_process");
const { NextResponse } = require("next/server");

export async function POST(request: Request): Promise<void | Response> {
  const { text } = await request.json();

  return new Promise<void | Response>((resolve) => {
    const command = `python3 api-python/main.py "${text}"`;
    exec(
      command,
      (error: { message: string } | null, stdout: string, stderr: string) => {
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
      }
    );
  });
}

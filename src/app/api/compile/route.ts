import { NextResponse } from "next/server";

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

export async function POST(req: Request) {
  try {
    const { code, language } = await req.json() as { code: string; language: string };

    const languageMap = {
      javascript: 63,
      python: 71,
      cpp: 54,
      java: 62,
    };

    const languageId = language in languageMap ? languageMap[language as keyof typeof languageMap] : undefined;

    if (!languageId) {
      return NextResponse.json(
        { error: "Unsupported language" },
        { status: 400 }
      );
    }

    const submitResponse = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&fields=*&wait=true",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": RAPIDAPI_KEY || "",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: code,
        }),
      }
    );

    if (!submitResponse.ok) {
      throw new Error("Failed to submit code.");
    }

    const submitData = await submitResponse.json();
    const output =
      submitData.stdout ||
      submitData.stderr ||
      submitData.compile_output ||
      "No output.";

    return NextResponse.json({ output });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An error occurred." },
      { status: 500 }
    );
  }
}

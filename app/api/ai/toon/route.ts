import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  // Simulated user input
  const userInput =
    "I updated the login module to version 3.2.0, but I did not run the deployment yet.";

  // TOON-style prompt
  const prompt = `
goal: transform a raw work note into a professional update

response_style:
  language: English
  tone: professional and clear
  size: short
  max_sentences: 2

rules:
  - do not add fake information
  - mention pending work if necessary

raw_note:
  text: "${userInput}"
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return NextResponse.json({
    output: response.output_text,
  });
}

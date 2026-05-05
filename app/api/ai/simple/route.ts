import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  // Simulated user input
  const userInput = "Say hello";

  // System prompt
  const prompt = `
    The user wants a friendly response.
    User input: "${userInput}"
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return NextResponse.json({
    output: response.output_text,
  });
}
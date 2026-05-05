import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  // Simulated user input
  const userInput =
    "I updated the login module to version 3.2.0, but I did not run the deployment yet.";

  // JSON prompt created by the application
  const prompt = {
    what_i_want: "Turn a raw work note into a professional update message",

    how_to_answer: {
      language: "English",
      tone: "professional and clear",
      size: "short",
      max_sentences: 2,
    },

    rules: {
      do_not_add_fake_information: true,
      mention_if_something_is_pending: true,
    },

    raw_note: {
      text: userInput,
    },
  };

  const response = await client.responses.create({
    model: "gpt-4.1-mini",

    // Convert object into JSON text
    input: JSON.stringify(prompt),
  });

  return NextResponse.json({
    output: response.output_text,
  });
}
import OpenAI from "openai";

export const handler = async (event) => {
  try {
    const { messages, temperature } = JSON.parse(event.body);

    const openai = new OpenAI({
      apiKey: process.env.VITE_OPENAI_API_KEY
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: completion.choices[0].message.content
      }),
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

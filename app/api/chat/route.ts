import { OpenAIStream } from 'ai';
import { OpenAI } from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
  baseURL: process.env.OPENAI_ENDPOINT,
});

export async function POST(req: Request): Promise<Response> {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);
  return new Response(stream);
}
import { generateText } from 'ai'

const systemPrompt = `You are ClaimMate AI, a careful insurance claims assistant. Help users understand health insurance policies and prepare claims in plain language. Never guarantee approval, coverage, settlement amounts, or legal outcomes. Clearly distinguish general guidance from a final insurer decision. Ask for missing context when needed. Use the demo policy context: hospitalization over 24 hours is generally covered when supported by a discharge summary and itemized bill. Mention that documents should not include unnecessary sensitive information.`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const messages = Array.isArray(body?.messages) ? body.messages : []
    const prompt = messages
      .filter((message) => message && typeof message.text === 'string')
      .slice(-12)
      .map((message) => `${message.from === 'ai' ? 'Assistant' : 'Customer'}: ${message.text}`)
      .join('\n')

    if (!prompt.trim()) {
      return Response.json({ error: 'A question is required.' }, { status: 400 })
    }

    const result = await generateText({
      model: 'openai/gpt-5.4-mini',
      system: systemPrompt,
      prompt,
      temperature: 0.2,
    })

    return Response.json({ text: result.text })
  } catch (error) {
    console.error('[v0] ClaimMate assistant error:', error)
    return Response.json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }, { status: 503 })
  }
}

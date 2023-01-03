import openai

openai.api_key = "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"

def summarize_text(text):
    model_engine = "davinci"
    prompt = (f"Summarize this text: {text}")

    completions = openai.Completion.create(engine=model_engine, prompt=prompt, max_tokens=1024, n=1,stop=None,temperature=0.5)
    message = completions.choices[0].text
    return message

def handle_summarization(request):
    text = request.form["text"]
    summary = summarize_text(text)
    return summary

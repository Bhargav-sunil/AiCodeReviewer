# 💡 AI Code Reviewer (React + Node.js + Gemini API)

LIVE URL: https://ai-code-reviewer-olive.vercel.app/

A web-based code review assistant powered by Google Gemini 2.0 Flash. This app allows users to input code and get real-time feedback and suggestions from an AI model.

---

## 🖥️ Tech Stack

### Frontend (React)
- `react`
- `react-simple-code-editor` – editable code box
- `prismjs` – syntax highlighting for editor
- `react-markdown` – rendering markdown output
- `rehype-highlight` – code block highlighting in markdown
- `highlight.js` – additional code styling for markdown
- `axios` – making HTTP requests

### Backend (Node.js + Express)
- `express` – web server
- `cors` – handle CORS requests
- `dotenv` – load environment variables
- `@google/generative-ai` – official SDK to connect to Gemini 2.0 Flash

---


🧪 Example Usage
Type or paste your JavaScript code into the editor on the left.

Click the "Review" button.

AI feedback will appear on the right with syntax-highlighted markdown.

🧠 How It Works
The frontend sends a code snippet to the backend using Axios.

The backend uses the Gemini 2.0 Flash model via @google/generative-ai SDK.

The AI's feedback is sent back and rendered in the frontend using react-markdown.


🔐 Important Notes
Ensure you’ve generated your API key from Google AI Studio.

Only use this key for development; restrict it properly via Google Cloud console.

This uses Gemini 2.0 Flash. You can switch to other models if needed (e.g., gemini-1.5-pro).

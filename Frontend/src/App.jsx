import React, { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { TailSpin } from "react-loader-spinner";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [code, setCode] = useState(`function sum(){
  return 1 + 1;
}`);
  const [review, setReview] = useState("");
  useEffect(() => {
    prism.highlightAll();
  }, [code]);

  const [loading, setLoading] = useState(false);
  const [reviewClicked, setReviewClicked] = useState(false);

  const reviewCode = async () => {
    setReviewClicked(true);
    try {
      setLoading(true);
      const response = await axios.post(
        `${API_URL}/ai/get-review`,
        { code }
      );
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setReview(" Error: Unable to fetch AI review. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code","Fira Mono",monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            className="review"
            onClick={reviewCode}
            disabled={loading}
            style={{
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Loading..." : "Review"}
          </button>
        </div>
        {reviewClicked ? (
          <div className="right">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <TailSpin
                  height="60"
                  width="60"
                  color="#00BFFF"
                  ariaLabel="loading"
                />
              </div>
            ) : (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            )}
          </div>
        ) : (
          <div className="right">
            <div className="center-message">
              "Click on Review to get the AI's feedback on your code."
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;

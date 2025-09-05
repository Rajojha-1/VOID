import { useState } from "react";

export default function Terminal() {
  const [history, setHistory] = useState([]);   // stores command + output
  const [input, setInput] = useState("");       // current input
  const [historyIndex, setHistoryIndex] = useState(null); // for arrow keys

  const handleCommand = async (command) => {
    let output = "";

    switch (command.toLowerCase()) {
      case "help":
        output = "Available commands: help, hello, date, joke, clear";
        break;
      case "hello":
        output = "👋 Hello there!";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "joke":
        try {
          const res = await fetch("https://api.chucknorris.io/jokes/random");
          const data = await res.json();
          output = data.value;
        } catch {
          output = "Failed to fetch joke 😢";
        }
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        output = `Unknown command: ${command}`;
    }

    setHistory([...history, { command, output }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
    setHistoryIndex(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (historyIndex === null) {
        setHistoryIndex(history.length - 1);
        setInput(history[history.length - 1]?.command || "");
      } else if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[historyIndex - 1].command);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex !== null) {
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setInput(history[historyIndex + 1].command);
        } else {
          setHistoryIndex(null);
          setInput("");
        }
      }
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {history.map((item, idx) => (
          <div key={idx}>
            <div className="command">> {item.command}</div>
            <div className="result">{item.output}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <span>> </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </form>
    </div>
  );
}

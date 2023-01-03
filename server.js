const express = require("express");
const app = express();
const port = 3000;
//const { handle_summarization } = require("./summarize.py");

const PythonShell = require("python-shell").PythonShell;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/summarize", (req, res) => {
  const text = req.body.text;
  const options = {
    mode: "text",
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "/Users/normanbui/Desktop/Projects/summarizeChatbot/summarize.py",
    args: [ "handle_summarization", text],
  };

  PythonShell.run("summarize.py", options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log("results: %j", results);
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

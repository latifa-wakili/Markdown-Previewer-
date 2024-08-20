import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './index.css'; // or './App.css' if you choose that name

function App() {
  const initialMarkdown = `# Welcome to my Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`.trim(); // trimming the markdown content to remove any extra spaces

  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    marked.setOptions({
      breaks: true, // This option ensures that carriage returns are rendered as <br> tags
    });
  }, []);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;

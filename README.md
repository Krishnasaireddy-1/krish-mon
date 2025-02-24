<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
<!--   <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #333;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 2em;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 1.5em;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    p {
      margin: 10px 0;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .highlight {
      background-color: #fff3d4;
      padding: 2px 5px;
      border-radius: 3px;
    }
  </style> -->
</head>
<body>

  <h1>krish-mon 🚀</h1>
  <p>A <strong>lightweight CLI tool</strong> designed to <strong>restart your server efficiently</strong>. Unlike <code>nodemon</code>, which focuses on file watching, <code>krish-mon</code> is optimized for quick server restarts, making it ideal for development workflows where speed and simplicity are key.</p>

  <hr>

  <h2>Features ✨</h2>
  <ul>
    <li><strong>Lightweight:</strong> Minimal and fast, with no unnecessary overhead.</li>
    <li><strong>Easy to Use:</strong> Just pass your server file as a parameter, and <code>krish-mon</code> will handle the rest.</li>
    <li><strong>Manual Restart:</strong> Type <code>rs</code> in the terminal to manually restart the server.</li>
    <li><strong>No Configuration:</strong> Zero setup required—just install and run.</li>
  </ul>

  <h2>Installation 📦</h2>
  <p>Install <code>krish-mon</code> globally using npm:</p>
  <pre><code>npm install -g krish-mon</code></pre>

  <h2>Usage 🛠️</h2>
  <h3>Basic Usage</h3>
  <p>Run <code>krish-mon</code> followed by the name of your server file (e.g., <code>server.js</code>):</p>
  <pre><code>krish-mon server.js</code></pre>

  <h3>Manual Restart</h3>
  <p>While <code>krish-mon</code> is running, you can manually restart the server by typing <code>rs</code> in the terminal and pressing <code>Enter</code>.</p>

  <h2>Example 🚀</h2>
  <ol>
    <li>Create a simple server file (<code>server.js</code>):</li>
    <pre><code>// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});</code></pre>
    <li>Start the server with <code>krish-mon</code>:</li>
    <pre><code>krish-mon server.js</code></pre>
    <li>Make changes to your <code>server.js</code> file, and <code>krish-mon</code> will automatically restart the server.</li>
    <li>To manually restart the server, type <code>rs</code> in the terminal and press <code>Enter</code>.</li>
  </ol>

  <h2>Why <code>krish-mon</code>? 🤔</h2>
  <ul>
    <li><strong>Focused on Restarts:</strong> Unlike <code>nodemon</code>, which watches files and restarts on changes, <code>krish-mon</code> is designed specifically for quick server restarts.</li>
    <li><strong>Lightweight:</strong> No unnecessary features—just what you need for efficient development.</li>
    <li><strong>Simple:</strong> No configuration required. Just install, run, and focus on coding.</li>
  </ul>

  <h2>License 📄</h2>
  <p>This project is licensed under the <strong>ISC License</strong>. See the <a href="LICENSE">LICENSE</a> file for details.</p>

  <h2>Contributing 🤝</h2>
  <p>Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.</p>

  <h2>Support 💖</h2>
  <p>If you find this package useful, please consider giving it a ⭐️ on <a href="https://github.com/your-username/krish-mon">GitHub</a>!</p>

  <hr>

  <p>Happy coding! 🎉</p>

</body>
</html>

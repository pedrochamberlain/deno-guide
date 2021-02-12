# Deno Beginner's Guide
<div>
  <img align="left" width="300px" src="https://i.imgur.com/NOdthAs.png">
  <div align="right">
    <h3 align="left">Deno</h3>
    <p>A secure runtime for <strong>JavaScript</strong> and <strong>TypeScript</strong>.</p>
  </div>
</div>

## What is Deno?
Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses Chrom's V8 engine and is built in Rust programming language, developed by the same cretor of <a href="https://github.com/pedrochamberlain/nodejs-guide">Node.js</a>, Ryan Dahl. 
<br><br>
### What are the main differences between Deno and Node.js?
- **Core:** Deno’s core is written in Rust programming language (core emphasis on safety) and Tokio. Node.js was built with C++.
- **Security:** Node.js allows seamless access encompassing filesystem, outgoing requests, environment variables, and more. While it is indeed a privilege to avail such access, there is also a flipside. This unrestricted access opens up a world of risks during the development or coding process. Deno takes security as it's  focal point, demanding explicit permissions for file, network and environment access.
- **TypeScript:** When using TypeScript, Node.js needs to be setup with package managers and a config file `tsconfig.json`. Deno, on the other hand, supports TypeScript right out of the box.
- **Package Managers:** Node uses npm package and node modules. Deno doesn’t use npm anymore, it uses modules referenced as URLs or file paths, it includes a built-in package manager for resource fetching. 
- **Importing packages:** Node.js uses CommonJS syntax to import modules. Deno uses “ES Modules” and does not support `require()`. Deno can import third party modules from any location on the web, like GitHub, a personal webserver, or a CDN.

### Does this mean I should immediately switch to Deno?
You could, but it's not exactly recommended. If you intend to use node packages that haven't been transferred to Deno. It's also important to recall that Node.js has gained a huge community in the last decade, while Deno has been in development for less than 3 years. It's your choice. 

## Setup
Run this on your CLI:
```zsh
$ brew install deno
```
It's as simple as that.

## Sources used
- [What is Deno & Will it replace Node.js? – Academind](https://www.youtube.com/watch?v=3Vl8a3zYjiw)
- [Deno in 100 seconds – Fireship](https://www.youtube.com/watch?v=F0G9lZ7gecE)
- [Deno Crash Course - Traversy Media](https://www.youtube.com/watch?v=NHHhiqwcfRM)
- [Deno Course in 6 hours - freeCodeCamp.org](https://www.youtube.com/watch?v=TQUy8ENesGY)

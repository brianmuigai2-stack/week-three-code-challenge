# week-three-code-challenge

> Solution to Week 3 code challenge — small JavaScript project demonstrating problem solving, tests, and basic docs.

[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![node](https://img.shields.io/badge/node-%3E%3D14-brightgreen.svg)](https://nodejs.org/)

## Table of Contents
- [About](#about)  
- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Usage](#usage)  
- [API / Functions](#api--functions)  
- [Project Structure](#project-structure)  
- [Testing](#testing)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)

---

## About
`week-three-code-challenge` contains my solution for the Week 3 coding challenge. The project focuses on implementing the required algorithm(s), handling edge cases, and including tests and documentation so others can run and review the solution easily.

> Short summary: implement `solveChallenge(input)` which returns the expected output for the challenge (update this sentence with the real challenge description).

## Demo
If you have a demo or deployed page add it here. Example:
- Live demo: `https://brianmuigai2-stack.github.io/week-three-code-challenge/`

Add screenshots inside `docs/` and link them:
docs/screenshot.png

markdown
Copy code

## Features
- Implementation of the Week 3 challenge algorithm
- Handles edge cases (empty input, invalid values)
- Unit tests included (Jest)
- Clean and documented code for easy review

## Tech Stack
- JavaScript (ES6+)
- Node.js
- Jest (for unit testing, if included)

## Prerequisites
- Node.js (v14 or newer)  
- npm or yarn package manager

## Installation

```bash
# clone the repo
git clone https://github.com/brianmuigai2-stack/week-three-code-challenge.git
cd week-three-code-challenge

# install dependencies (if any)
npm install
# or
yarn
If this is a plain front-end project, open index.html in a browser instead of installing dependencies.

Usage
Run script (node)
bash
Copy code
node index.js
Example
js
Copy code
// Example (update to your function name and path)
const { solveChallenge } = require('./src/main');

console.log(solveChallenge([1, 5, 6, 7, 97, 45, 57])); // => 97
API / Functions
solveChallenge(input: Array<number>) : number

Description: Returns the maximum number from the input array.

Params: input — array of numbers

Returns: number — the highest value

Edge cases: returns null or throws an error when input is not an array or empty (update to match your implementation)

(Replace above with real function names and descriptions from your code.)

Project Structure
bash
Copy code
/
├─ src/
│  ├─ main.js          # main solver / exports
│  ├─ utils.js         # helper functions
├─ test/
│  ├─ main.test.js     # unit tests (Jest)
├─ index.html          # demo page (if front-end)
├─ package.json
├─ README.md
└─ LICENSE
Testing
bash
Copy code
npm test
# or
yarn test
Example tests:

Correct output for sample input

Behavior on empty input

Handling of invalid types

Contributing
Fork the repository

Create a branch: git checkout -b feat/your-feature

Commit your changes: git commit -m "Add feature"

Push to your branch: git push origin feat/your-feature

Open a Pull Request

Please write tests for new functionality and follow existing code style.

License
This project is licensed under the MIT License — see the LICENSE file for details.

Contact
Brian Muigai — your.email@example.com
Project: week-three-code-challenge

yaml
Copy code

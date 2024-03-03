# Semester Project 2 (29 January - 03 March 2024)

This project is an auction website designed to allow users to post items for auction and bid on others' items. Utilizing modern web technologies, this front-end application provides a seamless user experience for auction activities.

Live version can be found here:
https://arnebhuset.github.io/

## Technologies Used

- HTML/CSS
- JavaScript
- Tailwind CSS
- PostCSS
- ESLint (configured with Prettier and Husky Commit Hooks)
- Jest for unit testing
- GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD)

## Configuration Details

- ESLint for JavaScript linting.
- Prettier for code formatting.
- Husky for managing Git hooks.
- Jest for unit testing.

## Build Status

[![CI](https://github.com/ArneBHuset/ArneBHuset.github.io/actions/workflows/ci.yml/badge.svg?branch=semester-project-2)](https://github.com/ArneBHuset/ArneBHuset.github.io/actions/workflows/ci.yml)

## Installation and Setup

Follow these steps to get the project running:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ArneBHuset/ArneBHuset.github.io.git
   git checkout semester-project-2
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Project**
   ```bash
   npm start
   ```
   Visit `http://localhost:8080` in your browser.
   ```bash
   alternatively run: npm run dev
   and start your own local serveer
   ```

## Running Tests

### ESLint

Run the following command to identify and fix linting errors:

```bash
npm run lint
```

If any errors occur, please run:

````bash
npx eslint . --ext .js,.mjs --fix

### Unit test with JEST

Run the following command to to test modal dialogue functionality:

```bash
npm run test
````

### Running both

Run the following command to test both ESLint and jest

```bash
npm run validate
```

Code sources for layout inspiration:
https://tailwindcomponents.com/component/footer-5
https://tailwindcomponents.com/component/application-header-with-clip-path

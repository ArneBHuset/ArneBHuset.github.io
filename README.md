# Auctionable

![Landing page image](<Landing page.png>)

## Description

This project is an auction website designed to allow users to post items for auction and bid on others' items. Utilizing modern web technologies, this front-end application provides a seamless user experience for auction activities.

## Demo

https://arnebhuset.github.io/

## Tech stack

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

## Installation and Setup

Follow these steps to get the project running:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ArneBHuset/ArneBHuset.github.io.git
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

#### Arne Bjelde Hustveit

- Get in touch: arne_hustveit@hotmail.com

- [Linkedin](www.linkedin.com/in/arne-bjelde-hustveit-48ab31276)
- [Github](https://github.com/ArneBHuset)
- [Portfolio](https://arnehustveit.myportfolio.com/)

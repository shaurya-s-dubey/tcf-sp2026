# Homework 2: Claim Your Corner of the Internet

**Objective**: Start build your own personal website using the modern frontend stack: Next.js, TypeScript, and Tailwind CSS.

**Inspiration**: Feel free to check out this great website that displays several amazing developer portfolios! https://webofdevs.com/ . Use this website for inspiration.

**Future work**: This homework is meant to get the ball rolling. Once you get started, you can look into vercel as a way of deploying your website (for free) and look into some tutorials to learn more about NextJS and it's capabilities.

## The Stack

Before you start, here is what you will be using:

1.  **Next.js**: A React-based framework that handles the heavy lifting of web development (routing, optimization, server-side rendering). It wraps React to make building full applications easier and faster.
2.  **TypeScript**: A superset of JavaScript that adds static types. It's like JavaScript with safety rails—it helps you catch errors before you run your code.
3.  **Tailwind CSS**: A utility-first CSS framework. Instead of writing separate `.css` files with custom class names, you use pre-defined utility classes (like `flex`, `pt-4`, `text-center`) directly in your HTML/JSX.

## Instructions

### 1. Project Setup

Open your terminal and navigate to this `02-frontend/hw` directory. Run the following command exactly as written:

```bash
npx create-next-app@latest mywebsite --typescript --tailwind
```

these were my answers to the questions asked after you run this command (for some more clarity):
<img width="1452" height="242" alt="image" src="https://github.com/user-attachments/assets/8b7347f1-fd91-4b02-9190-92f6e11bf118" />

This will create a new folder named `mywebsite` containing your Next.js project.

### 2. The Build

1.  Navigate into your new project: `cd mywebsite`
2.  Start the development server: `npm run dev`
3.  Open `http://localhost:3000` in your browser.
4.  Open the project in your code editor.
5.  Edit `app/page.tsx` (or `src/app/page.tsx` if you selected the src directory option).
    - Delete the boilerplate code provided by Next.js.
    - Create a root page that introduces **you**.
    - Include:
      - Your Name (styled prominently).
      - A short bio or introduction.
      - Links to your GitHub, LinkedIn, or other socials.
      - (Optional) A profile picture.
    - **Style everything using Tailwind CSS classes**. Do not write a separate CSS file unless you strongly preffer it. In our experience tailwind is a lot simpler.

### 3. The Writeup

In the `writeup.md` document in this folder, do the following. Write approximately 200 words covering:

- What you learned this week about frontend development.
- How using a framework like Next.js compares to writing raw HTML/CSS.
- Your understanding of how these tools (TS, Tailwind, Next.js) fit together.

## AI Disclosure & Academic Integrity

**You are allowed and encouraged to use AI tools** (ChatGPT, Claude, Cursor, Copilot) to help you with this assignment.

**HOWEVER**: You must be able to explain **exactly** what is happening in your code. If asked "What does `flex-col` do?" or "Why is this typed as `string`?", you must have the answer. Use AI to accelerate your learning, not to bypass it.

## Resources

Brief videos to get you up to speed:

- [Next.js in 100 Seconds](https://www.youtube.com/watch?v=Sklc_fQB85g)
- [Tailwind CSS in 100 Seconds](https://www.youtube.com/watch?v=mr15Xzb1Ook)
- [TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)

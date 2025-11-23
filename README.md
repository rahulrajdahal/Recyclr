# [Recyclr](https://recyclrr.netlify.app/). Let’s save the world TOGETHER

[![Component test](https://github.com/rahulrajdahal/Recyclr/actions/workflows/unit-test.yaml/badge.svg)](https://github.com/rahulrajdahal/Recyclr/actions/workflows/unit-test.yaml)

## 🏗 Installation

### 1. clone the repository

```sh
git clone https://github.com/rahulrajdahal/Recyclr.git
```

### 2. Install Dependencies

#### pnpm

```sh
cd Recyclr && pnpm install
```

### 3. Run development server

```sh
pnpm run dev
```

#### OR

### Run Production server

```sh
pnpm run preview
```

## Preview

[![Recyclr](./screenshots/Recyclr.png)](https://recyclrr.netlify.app/)

## 🚀 Project Structure

Inside of project [Recyclr](https://recyclrr.netlify.app/), you'll see the following folders and files:

```text
/
├── public/
│   └── logo.svg
├── src/
|   ├── assets/
│   │   ├── icon.svg
|   ├── components/
│   │   ├── Component.tsx
|   ├── pages/
│   │   ├── Page.tsx
└── index.html
└── tailwind.config.js
└── pwa-assets.config.ts
└── README.md
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                        |
| :----------------- | :-------------------------------------------- |
| `pnpm install`     | Installs dependencies.                        |
| `pnpm run dev`     | Starts local dev server at `localhost:5173`.  |
| `pnpm run build`   | Build your production site to `./dist/`.      |
| `pnpm run preview` | Preview your build locally, before deploying. |
| `pnpm run lint`    | Check all linting errors.                     |

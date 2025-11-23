<a href="https://recyclrr.netlify.app/" target="_blank" style="display:flex;gap:1rem;align-items:center;justify-content:center;">
<img src="./public/logo.svg" width=64/>
<p style="font-size:5rem;font-weight:bold;">Recyclr</p>
</a>

<div align="center">
<a traget="_blank" href="https://github.com/rahulrajdahal/Recyclr/actions/workflows/unit-test.yaml">
<img src="https://github.com/rahulrajdahal/Recyclr/actions/workflows/unit-test.yaml/badge.svg" alt="Component Test Badge"/>
</a> <a target="_blank" href="https://app.netlify.com/projects/recyclrr/deploys">
<img src="https://api.netlify.com/api/v1/badges/c550d786-53c7-4dad-9e59-d97eec1dd0b5/deploy-status" alt="Netlify Deployment Badge"/>
</a>
</div>
<p align="center">
<em>Let’s save the world TOGETHER</em>
</p>

## [Demo](https://recyclrr.netlify.app/)

## [Source](https://github.com/rahulrajdahal/Recyclr)

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

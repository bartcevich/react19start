# React + TypeScript + Vite

my-react-app/
├── src/
│ ├── components/
│ │ ├── Sidebar.tsx
│ │ ├── FileStorage.tsx
│ │ ├── Albums.tsx
│ │ └── ThemeSwitcher.tsx
│ ├── features/
│ │ ├── api/
│ │ │ └── fileStorageApi.ts
│ │ ├── albums/
│ │ │ ├── albumsSlice.ts
│ │ │ └── albumsApi.ts
│ ├── store.ts
│ ├── App.tsx
│ ├── main.tsx
│ └── ...

my-react-app/
|---node_modules
├── public/
├── src/
│ ├── app/ # Для глобального хранилища Redux
│ ├── assets/ # Статические файлы (шрифты, изображения)
│ │ ├── fonts/ # Ваши файлы шрифтов (например, HelveticaNeueCyr-Light.woff2)
│ │ └── images/ # Иконки (например, file-doc.svg)
│ ├── components/
│ │ ├── Sidebar.tsx
│ │ ├── FileStorage.tsx
│ │ ├── Albums.tsx
│ │ └── ThemeSwitcher.tsx
│ ├── features/
│ │ ├── api/
│ │ │ └── fileStorageApi.ts
│ │ ├── albums/
│ │ │ ├── albumsSlice.ts
│ │ │ └── albumsApi.ts
│ ├── helpers/ # Вспомогательные функции
│ ├── services/ # RTK Query API slices
│ ├── store.ts
│ ├── styles/ # Глобальные стили
│ ├── App.tsx # Главный компонент приложения
│ ├── main.tsx # Точка входа приложения
│ └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

Режим разработки

Для запуска приложения в режиме разработки с "горячей" перезагрузкой (hot-reloading) используйте следующую команду:

```bash
npm run dev
```

После выполнения этой команды, приложение обычно становится доступным по адресу `http://localhost:5173` (или другому порту, указанному в консоли). Любые изменения в файлах проекта будут автоматически отражаться в браузере.

## Создание сборки для публикации

Для создания оптимизированной и готовой к развёртыванию (production-ready) версии приложения выполните следующую команду:

```bash
npm run build
```

Эта команда скомпилирует и оптимизирует весь ваш код, изображения и другие ресурсы. Результаты сборки будут помещены в директорию `dist/` в корне вашего проекта. Именно содержимое этой директории вы будете развёртывать на вашем веб-сервере.

## Дополнительные команды

Проверка и исправление линтером (ESLint):
Эта команда запускает ESLint для проверки кода на потенциальные ошибки и нарушения стиля.
`bash
    npm run lint
    `

Предварительный просмотр продакшн-сборки:
После выполнения `npm run build`, вы можете локально протестировать получившуюся продакшн-сборку с помощью этой команды:
`bash
    npm run preview
    `
прежняя версия gitignore

# Logs

logs
_.log
npm-debug.log_
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
dist-ssr
\*.local

# Editor directories and files

.vscode/_
!.vscode/extensions.json
.idea
.DS_Store
_.suo
_.ntvs_
_.njsproj
_.sln
\*.sw?

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# vite-bem-template

## Версии / Изменения:
* от 1.04.24
  * добавлен миксин picture-random
  * добавлен миксин accordion-ui
  * добавлен @layer в style.scss
  * оптимизированы стили 
* от 20.03.24
  * ВАЖНО! внесены изменения в фаил select.js, теперь бек может добавлять дефолтные значения к селектам в атрибут value
  * изменения в компоненте picture: исправлен баг, когда при билде проекта не переносились png файлы
* от 19.04.24
  * styles/utils: functions.scss, utils.scss - удалены
  * styles/cores: core.scss, reset.scss - отредактированы
  * Обновлены мета теги
  * Добавлена папка js/components - для js логики


## Установка
* установите [Node.js](https://nodejs.org/en/) и [Yarn](https://yarnpkg.com/en/docs/install): ```npm install --global yarn```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.



## Файловая структура

```
vite-bem-template
├── src
│   ├── blocks
│   ├── images
│   ├── js
│   ├── layout
│   ├── pages
│   ├── public
│   │   └── fonts
│   └── styles
├── .change-path.js
├── .create-block.js
├── .create-page.js
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .pug-lintrc.json
├── .stylelintrc.json
├── gulpfile.js
├── package.json
├── postcss.config.js
└── vite.config.js
```

* Папка ```src``` - используется во время разработки:
    * блоки: ```src/blocks```
    * изображения: ```src/images```
    * JS-файлы: ```src/js```
    * основной макет сайта: ```src/layout```
    * страницы сайта: ```src/pages```
    * шрифты: ```src/public/fonts```
    * SCSS-файлы: ```src/styles```

## Команды
* ```yarn start``` - запуск сервера для разработки проекта
* ```yarn build``` - собрать проект с оптимизацией без запуска сервера
* ```yarn block``` - добавить bem блок
* ```yarn page``` - добавить страницу

## ВАЖНО При добавлении нового блока необходимо перезапускать сборщик, чтобы работал новый созданный фаил со стилем  


## Рекомендации по использованию
### Блоки проекта
* блоки проекта находятся в папке ```src/blocks```
  * блоки, созданные командой ```yarn block```, автоматически подключаются в файл: ```src/blocks/mixins.pug```
* каталог блока содержит в себе файлы разметки, стилей и, по необходимости, скриптов

### Страницы проекта
* страницы проекта находятся в корне папки ```src/pages```
* каждая страница представляет собой отдельный каталог, в котором содержится файл ```index.html``` и файл шаблона ```.pug```
  * страницы, созданные командой ```yarn page```, автоматически генерируют оба файла и их подключения


### Шрифты
* шрифты находятся в папке ```src/public/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff2``` и ```.woff```
    * шрифты подключаются в файле ```src/styles/utils/fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [сервиса](https://transfonter.org/)

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```yarn add package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла, например:
    ```javascript
    import $ from 'jquery'
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/style.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

### Запуск prettier 
* Устанавливаем Prettier - Code formatter
* Правая кнопка мыши - Format Documetn with
* Выбираем Prettier
implements -- инвертарь, конфиги для всего и вся что необходимо для сборки
 ├ dev-server.js -- скрипт для запуска dev-сервера
 ├ eslintrc.js -- конфиг для ESLint
 ├ stylelint.json -- конфиг для Stylelint
 ├ webpack.dev.conf.js -- конфиг для запуска webpack в dev-режиме
 └ webpack.dev.conf.js -- конфиг для запуска webpack в production-режиме
node_modules -- зависимости
src
 ├ actions -- экшены Redux
 ├ components -- dump-components
   ├ SomeComponent -- папка с кодом компонента
     ├ index.jsx -- главный файл компонента
     ├ style.css -- стили компонента в BEM методалогии
     ├ index.spec.js -- unit тесты компонента
     └ other -- любые другие ресурсы (графика, или что-то еще) касающиеся только компонента
   └ AnotherComponent
 ├ config -- конфигурационныу файлы приложения
 ├ containers --
   ├ SomeContainer -- папка с кодом контейнера
     ├ index.jsx -- главный файл контейнера
     ├ style.css -- стили контейнера в BEM методалогии
     ├ index.spec.js -- unit тесты контейнера
     └ other -- любые другие ресурсы (графика, или что-то еще) касающиеся только контейнера
   └ AnotherContainer
 ├ reducers
   └ index.js -- файл собирающий все reducers воедино
 ├ tools
  ├ i18n
    ├ ru -- языковой пакет
      ├ sample.js -- подпакет с сообщениями
      └ index.js -- главный файл объединяющий подпакеты
    └ index.js -- собирающий файл для языковых пакетов
  └ styles -- общие файлы для стилей (хелперы, миксины, наборы переменных и тд);
static -- рабочая папка, со собранной статикой
 ├ dist -- все что скомпилит webpack
 └ index.html -- файл подключающий приложение
.babelrc -- конфиг для babel
.editorconfig -- конфиг для IDE или TR
.eslintignore -- файл игнора для ESlint
.gitignore -- файл игнора для Git
env.json -- конфигурация проекта, содержащая основные настойки для запуска
end.json.dist -- резервный файл, хранящийся в СКВ


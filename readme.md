## Лендинг создания чат-ботов,  с большим количеством анимации

Основной функционал приложения:
- автоматическая подгрузка новых данных с сервера через сервис;
- автоматическая замена ссылок на социальные сервисы через замену пердаваемых данных;
- форма обратной связи;
- Все компоненты разбиты на маленькие подкомпоненты чтобы можно было перебирать и переиспользовать;
- Все стили компонентов ответственны только за свой компонент(scope) и никак не конфликтуют;

Сборка компонентов и логика на Angular - [Код](https://github.com/Wokh-Dada/botDevelAppInAngular) | [Демо](https://wokh-dada.github.io/botDevelAppInAngular/)

### При создании использовалось

#### Ссылки link css
- `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">`
- `<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet">`
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>`


#### Link js
- `<script src="https://cdn.boomcdn.com/libs/wow-js/1.3.0/wow.min.js"></script>`


##### Скрипты js
-`<script> new WOW().init(); </script>`
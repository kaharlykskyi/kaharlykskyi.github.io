[![Binary Studio Academy](/assets/logo.png)](http://academy.binary-studio.com)  
*Безкоштовна онлайн IT академія, яка забезпечує професійне перетворення*

---------
1. [**JavaScript <sup><small><em>(for non-frontenders)</em></small></sup>**](#1-javascript-for-non-frontenders)
2. [**Git & how to use it**](#2-git--how-to-use-it)
---------

## 1. JavaScript <sup><small><em>(for non-frontenders)</em></small></sup>
1. [**Вступ до JavaScript**](#)
2. [**Домашнє завдання**](#)
3. [**Лайфхаки і підказки**](#)

### 1. Вступ до JavaScript

* Коротка історія JavaScript (розкажи про специфікації і призначення)
* Браузер, DOM, вузли, API, дебаггер (як почати писати, entry point)
* Scope, event loop (що впливає на швидкість, паралелізм, про динамічну пам'ять і типізацію, [значення змінних vs посилання на змінні](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0), замикання тощо)
* Класи (об'єктно-орієнтоване програмування, наслідування)

### 2. Домашнє завдання

Додати до календаря події!  
Це можуть бути якісь плани (не обов'язково ті, що обов'язково збудуться, перепрошую за каламбур) — відвідати якийсь концерт чи футбольний матч, досягнути чогось важливого (планка 15 хвилин) до якогось конкретного дня, просто зустрітись з друзями, поїхати відпочивати тощо. Можливо варто окрім назви події і детальнішого опису (чому? як?) додати ще аватари учасників з посиланнями на Фейсбук, наприклад. [**Semantic-UI**](https://semantic-ui.com/) має все необхідне, щоб можна було створити такий інтерфейс. Тобто після кліку по конкретному дню (його очевидно треба якось виділити стилем — зробити жирним чи додати якийсь кольоровий фон) може виїхати **Sidebar** або вискочити **Modal** — що вважаєш за потрібне. І в тому вже блоці може бути заголовок з назвою події, потім опис події, а потім, наприклад, аватари учасників. Можливо при наведенні на день, на який запланована подія, з'явиться ще **Popup** з назвою тої події.  
*До чого тут JavaScript?* Нууууу, треба спочатку десь зберегти список всіх подій. Імовірно це буде масив об'єктів по типу такого:
```
[{
    date: "2017-07-20",
    event: "Come up with a homework idea",
    description: "Well, yeah, you know. You've got to engage the audience, inspire them to do something if not great than warm at least. Something you'll be glad to check on later."
  },
  {
    date: "2017-07-22",
    event: "Parent's birthday",
    description: "Yeah, both of them. Mom wanted a new bag — have no idea where to get one. Zara? Will see. Anyway, yeah, both of them, same day. Have to check those homeworks though."
  }
]
```

---------

## 2. Git & how to use it
1. [**Вступ до Git**](#1-Вступ-до-git)
2. [**Домашнє завдання**](#2-Домашнє-завдання)
3. [**Лайфхаки і підказки**](#3-Лайфхаки-і-підказки)

### 1. Вступ до Git

* Створюємо локальний git-репозиторій з допомогою `git init`
* Захоплюємо зміни в репозиторії за допомогою `git add`, `git reset`, `git commit`
* Ізолюємо розробку різного функціоналу в окремих `git branch`-ах
* Склеюємо гілки з `git merge`
* Виправляємо конфлікти склеювання з підказками від `git status`
* Використовуємо тимчасове сховище `git stash`
* Переглядаємо історію commit-ів за допомогою `git log`
* Відміняємо commit з `git revert`
* Дивимось різницю версій файлу через `git diff`
* Використовуємо .gitignore для виключення файлів з обліку
* Налаштовуємо git із `git config`
* Відправляємо репозиторій до віддаленого сервера через `git push`
* Клонуємо віддалені репозиторії з `git clone`
* Синхронізуємо локальний репозиторій з віддаленим через `git pull`

![Y U NO GIT](/assets/y-u-no-git.png)

### 2. Домашнє завдання

Створити репозиторій на **GitHub**'і та додати в основну гілку текстовий файл довільної назви і щоб його вмістом була якась стаття, яка тобі сподобалась останнім часом або ж викликала резонанс у суспільстві, чи улюблений уривок з книжки тощо. Цей текст буде першим коммітом до репозиторію.

Завдання полягає в тому, щоб відредагувати помилки в статті (якщо вони є — можна спеллчекером прогнати, наприклад) і додати свою думку стосовно вибраної теми у вигляді коментарів. Можна навіть додати статтю вже з коментарями інших людей і відповісти їм (десь серйозно, десь мемчиком, а десь самому пожартувати) — творчий підхід вітається, але не є обов'язковим. Так само і форматування тексту — markdown для читабельності не буде лишнім, але й не вимагається.

Оцінюватись буде робочий процес (той самий **GitKraken** дуже гарно намалює, що відбувалося):

* які гілки були створені
* чи для кожного коментаря була окрема гілка чи одна для всіх
* чи впроваджувалися зміни до власних коментарів і як називались гілки, в яких впроваджувались ці зміни
* чи використовувались такі функції **GitHub** як **Issues**, **Projects**, **Pull Requests**.

Зробіть два таких текстових файли, будь ласка, по статті на кожен ("нам нужно больше веток, хозяин!")

### 3. Лайфхаки і підказки
**DISCLAIMER:** лайфхаки і підказки носять чисто інформативний характер. Метою лекції є пересвідчитись, що в учасників академії достатньо знань про **git** аби виконувати наступні по плану завдання академії. Для цього вистарчить вміння створити репозиторій, залити свій проект, змінити його при необхідності тощо. А вже використання розширених функцій **GitHub** просто дозволяє краще зрозуміти механізм екосистеми, в якій працюють сучасні розробники. Як і вибір статей і коментарів просто частково розкриває характер учасника академії, що, погодьтесь, не має абсолютно ніякого відношення до **git**. В підсумку, **git — must** have, *плюшки — nice* to have.

#### 3.1. Markdown
В умові сказано про текстові файли довільної назви і хоча звичний *.txt повністю задовільняє умову задачі, використання розширення *.md підкаже **GitHub**'у як відображати файл і тому ці файли будуть мати приємніший вигляд для тих, хто переглядає їх онлайн. Для тих хто скачав собі репозиторій локально це й дальше буде просто текст в моноширинному шрифті.

З статті [**Mastering Markdown**](https://guides.github.com/features/mastering-markdown/) — "Markdown is a way to style text on the web". Markdown використовується не тільки у **GitHub**, а також у Trello і Slack. Практично кожен популярний чат чи менеджер завдань має підтримку Markdown (хоча синтаксис може відрізнятися, наприклад, Slack використовує одинарні * для виділення жирним), тому і рекомендується знати [**синтаксис Markdown**](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf).

#### 3.2. Projects and Issues
Зазвичай розробники працюють в командах, використовуючи agile development методики:

* це вирішує проблему організації програмістів (*organized*), які в основному не документують свою роботу і не надто багатослівні в поясненнях
* це допомагає самим розробникам краще орієнтуватись в проекті і мати документацію (*efficient*)
* а також це допомагає менеджерам вільно перетасовувати розробників та мати змогу замінити одного працівника іншим, не боячись втратити разом з звільненням першого цінні know-how (*you're fired, LOL*).

##### 3.2.1. Projects

Незалежно від ставлення до методики сам процес варто знати. Проект як правило організовується у вигляді віртуальної дошки з 4 стовпцями (дошок може бути кілька, стовпців теж) — **Backlog**, **Ready**, **In progress**, **Done**. Всі нові історії (саме історії) падають в **Backlog** в вигляді карток-стікерів, потім переміщуються у **Ready** при умові, що "вже пора", під час впровадження змін знаходяться у **In Progress**, і, зрештою, падають в **Done**, після чого перевіряються менеджером чи іншим відповідальним і позначаються як "закриті". Звідси і різниця між "закритими" по версії розробника і по версії менеджера — я кинув в **Done**, менеджер чи лідер команди підтвердив або ж відкинув назад в **In progress** і я клацаю далі.

![Project](/assets/project.png)

Якраз через agile такий функціонал як **Projects** був відносно недавно доданий до **GitHub** (для особистих репозиторіїв зійде, команди все одно користують Trello чи щось схоже). **Issues** були значно раніше.

##### 3.2.2. Issues

**Issues** — це "проблеми", часто технічні кроки, які треба виконати, щоб вирішити "історію" (чи баги, для яких історій зазвичай **не** створюють). Наприклад, користувачі вимагають "Підняти контраст сайту" і для цього була створена одна картка, але дві проблеми — "Пофарбувати фон у чорний" та "Покрасити текст у білий", над якими в різний час працюватимуть двоє людей. Взагалі, чітких правил немає, у кожної команди підхід буде завжди свій, по-своєму унікальний і "правильний".

#### 3.3. 'Look around'
Варто завжди пам'ятати, що в основному **GitHub** — це світ *open source*, що значить, що спочатку варто спробувати відшукати необхідний кусок коду і скопіювати його (при умові, що це дозволяє [**LICENSE**](https://github.com/reactjs/redux/blob/master/LICENSE.md)), аніж одразу впрягатись в ґуґління по запиту "як мені *х*?" з подальшими спробами перевинайти колесо.

**GitHub** для розробника — це новий Google, лише підхід треба дещо змінити (шукати по ключових словах, імовірних назвах функцій тощо). Адже пошук по "redux does not work unhandled exception" у всьому Google'і видасть безліч лівих результатів, включаючи безтолкові блогпости про те "як я зміг", тоді як цей же пошук по **GitHub Issues** — лише конкретні проблеми і їх обговорення тими людьми, в яких була ця проблема.

Як це працює для даного конкретного домашнього завдання? По запитах [**"BSA"**](https://github.com/search?o=desc&q=BSA&s=updated&type=Repositories&utf8=%E2%9C%93) і [**"Binary Studio Academy"**](https://github.com/search?o=desc&q=Binary+Studio+Academy&s=updated&type=Repositories&utf8=%E2%9C%93) і сортуванням по *Recently updated* можна знайти декілька цікавих репозиторіїв (включаючи цей). Форкнути їх собі не вийде, адже жоден з авторів не позначив свій репозиторій ліцензією з дозволом на копіювання і зміну. Зате можна глянути, що відбувається "на районі".

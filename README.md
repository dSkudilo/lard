Тестовое задание 

Был создан раздел с таблицей фильтрацией, все вынесено в отдельные компоненты и функции хелперы 

внизу представлен текст тз

Задание:

Используемый стек технологий:
Vuetify 3 + Vue 3 JS (setup)
Краткое описание ТЗ:
Сверстать по макету страницу со списком сотрудников с возможностью добавления и
применением фильтра. С использованием локального хранилища state

Вводные данные:
● Пол - Женский, Мужской
● Гражданство - Россия, Таджикистан, Узбекистан
● Должность - Промышленный альпинист, Токарь, Пекарь
● Тип договора - Перечислены в макете блок “фильтр”
● Сотрудники - Можно взять из макета, либо разнообразить по желанию
● Тэги сотрудников - Перечислены в макете после заголовка “Список
сотрудников”
Подробное описание ТЗ:
1. На макете представлено:
1.1. Центральный блок
1.1.1. Представлен список сотрудников необходимо отобразить только
те поля которые представлены в макете.
1.1.2. Тэги сотрудников, при нажатии на тэг текст становиться белым, а
бэкграунд тэга окрашивается в его основной цвет, при повторном
нажатии фильтр по тэгу убирается. Одновременно можно выбрать
несколько тэгов. При нажатии на дефолтный тэг весь список,
список выбранных тэгов очищается.
1.1.3. Кнопка “показать ещё”, по дефолту максимально видно 4 записи,
при нажатии на показать ещё список расширяется и видно + ещё
4 записи, при достижении максимального количества записей
кнопка исчезает.
1.2. Правый блок
1.2.1. Кнопка “Добавить нового сотрудника”. При нажатии на неё
необходимо реализовать добавление нового сотрудника в
основной список state так чтобы он отобразился первым в списке,
сам список не расширялся больше максимального количества
видимых записей. Добавление сотрудника происходит в
соответствии с описанными выше полями, в модальном
окне/боковой вкладке (modal/sidebar) (выбрать вариант который
вам удобнее) (реализовать гибкий дочерний компонент, в котором
также возможно воссоздать и редактирование в будущем), с
валидацией описанных полей.
1.2.2. Фильтр, при выборе фильтра использовать ранее реализованные
данные. При нажатии на кнопку “Применить” необходимо
фильтровать записи в соответствии с выбранными полями. При
нажатии на “очистить”, фильтр возвращается к изначальным
(дефолтным) значениям

Сущности:
● Тэг сотрудников (staff_tag)
○ id - number
○ title - string
○ slug - string (сокращение от title)
○ color - string
● Гражданство (county)
○ id - number
○ icon - string (путь к svg файлу)
○ title - string
○ slug - string (сокращение от title)
● Должность (position)
○ id - number
○ name - string
● Тип договора (type_contact)
○ id - number
○ title - string
○ slug - string (сокращение от title)
● Пол (gender)
○ id - number
○ title - string
○ slug - string (сокращение от title)
● Сотрудник
○ full_name - string (ФИО) valid
○ inn - string (ИНН) valid
○ address - string (Адрес) valid
○ date_birth - string DD.MM.YYYY (Дата рождения)
○ age - number (Возраст)
○ type_contract - (Объект тип договора) valid
○ type_contact_id - (ID типа договора) valid
○ gender - (Объект пол) valid
○ gender_id - (ID пола) valid
○ country - (Объект гражданство) valid
○ country_id - (ID гражданства) valid
○ position - (Объект должность) valid
○ position_id - (ID должности) valid
○ status -> valid (Статус сотрудника - выводить необходимо description
сортировать по tag_id)
■ tag_id - (ID тэга сотрудника)
■ tag - (Объект тэг сотрудников)
■ description - string (Описание статуса)

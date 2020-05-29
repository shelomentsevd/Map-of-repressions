# Карта репрессий	
## Описание проекта:
Что такое карта репрессий?
Карта репрессий отображает события правонарушений в Интернете по каждому региону России. Можно увидеть на какой регион больше всего приходится нарушений в сети, на каких площадках и ресурсах произошло злодеяние.
Существующая карта репрессий ОЗИ - https://ozi-ru.org/news/ozi/howto-jeffektivnye-argumenty-protiv-idei-cenzurirovanija-v-internete/ нуждается в серьёзной модернизации.

Что хочется изменить?
Во-первых,  переделать эту карту на плиточную. Не будет необходимости устанавливать кнопки масштабирования на карте - все регионы одинакового размера.
Во-вторых, добавить больше аналитики для карты. Например, график дел по годам, по месяцам, диаграмма кол-ва дел на каждую платформу, общий график, отображающий динамику "напряженности" и т.д. Тем более, что данные для построения аналитики уже есть в гуглотабличке.
В-третьих, нужно чтобы ресурс импортировал данные по регионам напрямую с google sheets. Идея с гуглотаблицей позволит заменить любой бэкэнд, ничего не нужно парсить. То что мы запрашиваем из таблицы уже возвращается к нам в json.
В-четвертых, добавить инструментарий для админа, чтобы он мог сам задавать условия для карты с той же гуглотаблички (менять цвет региона, добавлять события на карту и т.д) и создать систему проверок условий ввода в табличке.
Ну и вообщем-то хотелось бы создать универсальный аналитический инструмент, который смогут использовать другие ресурсы. Т.е имеется в виду использование на другом ресурсе нашей карты и их БД в виде гуглотаблички.

Что-то уже сделано?
Да, есть уже некие наброски: сверстана карта на d3.js, построен один график, в качестве БД у нас пока выступает jsx внутри проекта. 
Создан клиент для вытаскивания данных с гуглотаблички.
В проект включены react, ну и другие js библиотеки. 
Проект лежит на гитхабе https://github.com/Internet-Protection-Society/Map-Visualization
## Какую проблему решает проект:
Проект устранит недостатки предыдущей версии карты, связанных с интерфейсом и функционалом. Самое главное, что проект заточен под создание универсального инструмента для аналитики, который будет предоставлен в свободном доступе для других организаций (не обязательно политического характера), желающих на основе своих данных визуализировать их у себя на ресурсе. 	
## В проект нужны:
1.Для нашего проекта нужны программисты со знанием frontend языков, желательно хорошо знать JS, поскольку на нем будет основываться функционал ресурса. 
2.Также нужен веб-дизайнер, который бы помог сделать наш проект более привлекательным.
3.Ну и просто нужны люди, у которых есть предложения и идеи, как сделать наш проект круче :)
## Контакты:
Егор
* session_dynasty@mail.ru
* https://t.me/Jiang_Bey	
* https://github.com/JiangBey

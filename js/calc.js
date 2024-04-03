let st1Input; // переменная для хранения первого поля ввода
let st2Input;
let calcButton;
let testButton;

//#region Events
window.onload = function(){ // это обработчик событий который срабатывает при окончании загрузки страницы
    st1Input = document.querySelector("#st1"); // с помощью функции querySelector мы выбираем елемент с индентификатором ст1 и помещаем его в переменную st1Input
    st2Input = document.querySelector("#st2");
    calcButton = document.querySelector("#button");
    testButton = document.querySelector("#testButton");

    calcButton.addEventListener("click", button_onClick); // кнопка для обчисления
    testButton.addEventListener("click", function(){
        document.location.href = "../test.html";
    });
};

function button_onClick(){
    care(st1Input.value, st2Input.value, "alert"); // вызов функции care по клику на кнопку
}
//#endregion

//#region Logic
function care(a, h, mode){ // функция возвращает площадь треугольника
    if(a != null && a > 0 && h != null && h > 0){ // проверяем не равны ли у нас аргументы 0 или не являеться пустым множеством
        let s = (a*h) / 2; // вычисляем площадь, теперь s принимает площадь прямоугольного треугольника

        switch(mode){  // конструкция которая проверят все случаи, сопостовляя их с исходным вариантом
            case "alert": // в случае если mode содержит alert выводиться сообщением на экран пользователя 
                alert("Площа прямокутного трикутника дорівнює " + s);
            break;
            case "write": // в случает если мод содержит write выводим сообщение на странице html используя функцию write
                document.write("Площа прямокутного трикутника дорівнює " + s);
            break;
        }

        return s; // возвращаем площадь
    }
    else{ // выводим сообщение если пользователь не введет значений
        alert("Поля висоти та основи не мають бути порожніми.");
        return null;
    }
}
//#endregion
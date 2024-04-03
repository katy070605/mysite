let button; // переменная для кнопки пройти тест

window.onload = function(){ 
    button = document.querySelector("#button");

    button.addEventListener("click", beginTest); // при нажатии на кнопку вызываеться функция beginTest
};

function beginTest() {
    try { // оператор try позволяет определить блок кода который проверяеться на наличие ошибок во время его выполнения
        var i = 0;

        if (confirm("2+2=4?")) { alert("Правильно!"); i++; } else alert("Hi!");

        if (confirm("2+3=6?")) { alert("НІ!"); i++; } else alert("Правильно");

        if (confirm("2+4=6?")) { alert("Правильно!"); i++; } else alert("Hi!");

        var s = parseInt(prompt("2+2= ?", ""));
        if (s === 4) { alert("Правильно!"); i++; } else alert("Hi!");

        s = parseInt(prompt("2+3= ?", ""));
        if (s === 5) { alert("Правильно!"); i++; } else alert("Hi!");

        s = parseInt(prompt("2+4= ?", ""));
        if (s === 6) { alert("Правильно!"); i++; } else alert("Hi!");

        s = parseInt(prompt("10+10=", ""));
        if (s === 20) { alert("Правильно!"); i++; } else alert("Hi!");

        s = parseInt(prompt("15+15=", ""));
        if (s === 30) { alert("Правильно!"); i++; } else alert("Hi!");

        if (i >= 5) { alert("Чудово"); }
        else if (i >= 3) { alert("Добре"); }
        else { alert("Погано"); }
        
        alert("Сума балів=" + i);
    } catch (e) {
        console.log(e);
    }
}

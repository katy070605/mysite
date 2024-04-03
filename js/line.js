document.addEventListener("DOMContentLoaded", function() { // вызываем функцию инициализации линии и обьявляем функции для изменения размер с помощью drag & drop
    var line = document.getElementById("line"); // получим html объект используя его идентификатор после чего присвоем его значение переменной лайн
    var isDragging = false; 
    var initialY, initialHeight; // прописываем изначальную кординату по у, прописываем начальную высоту
  
    // Функція для початку перетягування лінії
    function startDrag(e) {
      isDragging = true;
      initialY = e.clientY;
      initialHeight = parseInt(getComputedStyle(line).height, 10);
    }
  
    // Функція для закінчення перетягування лінії
    function endDrag() {
      isDragging = false;
    }
  
    // Функція для переміщення лінії
    function drag(e) {
      if (isDragging) {
        var deltaY = e.clientY - initialY;
        var newHeight = initialHeight + deltaY;
        line.style.height = newHeight + "px";
      }
    }
  
    // Додати обробники подій для початку, закінчення та переміщення лінії
    line.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("mousemove", drag);
});
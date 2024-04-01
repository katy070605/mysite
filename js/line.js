document.addEventListener("DOMContentLoaded", function() {
    var line = document.getElementById("line");
    var isDragging = false;
    var initialY, initialHeight;
  
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
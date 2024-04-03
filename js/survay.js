document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Забороняємо формі відправлятися на сервер
  
    // Отримуємо значення полів форми
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;
    let country = document.getElementById("country").value;
  
    // Виводимо зібрані дані
    alert("Стать: " + gender + "\nВік: " + age + "\nСімейний стан: " + maritalStatus + "\nКраїна проживання: " + country);
});